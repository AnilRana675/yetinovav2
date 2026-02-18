import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Manrope, Instrument_Sans } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YetiNova - Building Sustainable Digital Ventures",
  description:
    "We back Nepal's boldest builders. We turn raw concepts into global-grade startups — reinvesting our returns to fuel the next batch.",
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
