import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Manrope, Instrument_Sans } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: false,
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  preload: false,
});

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
      className={`dark ${GeistMono.variable} ${manrope.variable} ${instrumentSans.variable}`}
      style={{ "--accent-color": "#606FCC" } as React.CSSProperties}
    >
      <body
        className={`antialiased bg-black text-neutral-text font-sans selection:bg-[var(--accent-color)] selection:text-black transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
