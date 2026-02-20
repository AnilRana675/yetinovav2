import { NextResponse } from "next/server";
import { Resend } from "resend";
import { AdminNotificationEmail } from "@/components/emails/AdminNotification";
import { UserAutoReplyEmail } from "@/components/emails/UserAutoReply";
import { checkRateLimit, getRateLimitHeaders, getRetryAfterSeconds } from "@/lib/rate-limit";
import {
  type ContactFormData,
  contactFormSchema,
  formatValidationErrors,
} from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "contact@yetinova.com";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@yetinova.com";
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

const AUTO_REPLY_DELAY_MS = 20 * 1000;

const MAX_BODY_SIZE = 10 * 1024;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

function isValidOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return true;
  }

  try {
    const originUrl = new URL(origin);
    const allowedOrigins = [host, `https://${host}`, "localhost:3000", "http://localhost:3000"];

    if (process.env.NODE_ENV === "development") {
      allowedOrigins.push("localhost:3000", "http://localhost:3000");
    }

    return allowedOrigins.some((allowed) => originUrl.host === allowed.replace(/^https?:\/\//, ""));
  } catch {
    return false;
  }
}

async function sendToGoogleSheets(
  data: ContactFormData & { ipAddress: string; timestamp: string }
) {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn("Google Script URL not configured");
    return;
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: data.timestamp,
        name: data.name,
        email: data.email,
        inquiryType: data.inquiryType,
        message: data.message,
        ip: data.ipAddress,
        status: "new",
      }),
    });

    const responseText = await response.text();
    console.log("Google Sheets Response Status:", response.status);
    console.log("Google Sheets Response Body:", responseText);

    if (!response.ok) {
      console.error("Failed to send to Google Sheets:", response.statusText, responseText);
    }
  } catch (error) {
    console.error("Network or parsing error sending to Google Sheets:", error);
  }
}

async function delayedAutoReply(data: ContactFormData) {
  setTimeout(async () => {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: data.email,
        subject: "Thanks for reaching out!",
        react: UserAutoReplyEmail(data),
      });
    } catch (error) {
      console.error("Failed to send auto-reply:", error);
    }
  }, AUTO_REPLY_DELAY_MS);
}

export async function POST(request: Request) {
  try {
    if (!isValidOrigin(request)) {
      return NextResponse.json(
        { error: { code: "forbidden", message: "Invalid origin" } },
        { status: 403 }
      );
    }

    const clientIp = getClientIp(request);
    const rateLimitResult = checkRateLimit(clientIp);

    if (!rateLimitResult.success) {
      const retryAfter = getRetryAfterSeconds(rateLimitResult.resetAt);
      return NextResponse.json(
        {
          error: {
            code: "rate_limit_exceeded",
            message: `Too many requests. Please wait ${retryAfter} seconds.`,
            retryAfter,
          },
        },
        {
          status: 429,
          headers: {
            ...getRateLimitHeaders(rateLimitResult),
            "Retry-After": String(retryAfter),
          },
        }
      );
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: { code: "payload_too_large", message: "Request body too large" } },
        { status: 413 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: { code: "invalid_json", message: "Invalid JSON in request body" } },
        { status: 400 }
      );
    }

    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      console.error("[Form Validation Failed]:", fieldErrors);
      const details = formatValidationErrors(fieldErrors);

      return NextResponse.json(
        {
          error: {
            code: "validation_error",
            message: "Request validation failed",
            details,
          },
        },
        { status: 422, headers: getRateLimitHeaders(rateLimitResult) }
      );
    }

    const data = parsed.data;

    if (data.websiteUrl && data.websiteUrl.length > 0) {
      console.warn(`Bot detected from IP: ${clientIp}`);
      return NextResponse.json(
        { error: { code: "bot_detected", message: "Invalid submission" } },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const adminEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact: ${data.name} - ${data.inquiryType}`,
      react: AdminNotificationEmail({
        ...data,
        timestamp,
        ipAddress: clientIp,
      }),
    });

    if (adminEmailResult.error) {
      console.error("Failed to send admin email:", adminEmailResult.error);
      return NextResponse.json(
        { error: { code: "email_failed", message: "Failed to send message" } },
        { status: 500 }
      );
    }

    await sendToGoogleSheets({
      ...data,
      ipAddress: clientIp,
      timestamp,
    });

    delayedAutoReply(data);

    return NextResponse.json(
      {
        data: {
          id: adminEmailResult.data?.id,
          status: "sent",
        },
      },
      {
        status: 201,
        headers: getRateLimitHeaders(rateLimitResult),
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: { code: "internal_error", message: "An unexpected error occurred" } },
      { status: 500 }
    );
  }
}
