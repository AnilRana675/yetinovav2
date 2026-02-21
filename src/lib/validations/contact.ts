import { z } from "zod";

export const inquiryTypes = ["funding", "partnership", "government", "general"] as const;

export type InquiryType = (typeof inquiryTypes)[number];

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z.string().email("Please enter a valid email address").toLowerCase().trim(),
  inquiryType: z.enum(inquiryTypes, {
    message: "Please select a valid inquiry type",
  }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .trim(),
  websiteUrl: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const inquiryTypeLabels: Record<(typeof inquiryTypes)[number], string> = {
  funding: "Apply for Funding",
  partnership: "Strategic Partnership",
  government: "Government & NGO",
  general: "General",
};

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export function formatValidationErrors(
  errors: z.inferFlattenedErrors<typeof contactFormSchema>["fieldErrors"]
): ValidationError[] {
  const formatted: ValidationError[] = [];

  for (const [field, messages] of Object.entries(errors)) {
    if (messages && messages.length > 0) {
      formatted.push({
        field,
        message: messages[0],
        code: "invalid_value",
      });
    }
  }

  return formatted;
}
