import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import "material-symbols/outlined.css";
import { Toaster } from "sonner";
import "./globals.css";

const SITE_URL = "https://yetinova.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "YetiNova - Building Sustainable Digital Ventures",
  description:
    "We back Nepal's boldest builders. We turn raw concepts into global-grade startups — reinvesting our returns to fuel the next batch.",
  openGraph: {
    title: "YetiNova - Building Sustainable Digital Ventures",
    description:
      "We back Nepal's boldest builders. We turn raw concepts into global-grade startups — reinvesting our returns to fuel the next batch.",
    url: SITE_URL,
    siteName: "YetiNova",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YetiNova - Building Sustainable Digital Ventures",
    description:
      "We back Nepal's boldest builders. We turn raw concepts into global-grade startups — reinvesting our returns to fuel the next batch.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${GeistMono.variable}`}
      style={{ "--accent-color": "#606FCC" } as React.CSSProperties}
    >
      <body
        className={`antialiased bg-black text-neutral-text font-sans selection:bg-(--accent-color) selection:text-black transition-colors duration-500`}
      >
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
