import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/instrument-sans/700.css";
import "material-symbols/outlined.css";
import "./globals.css";

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
      className={`dark ${GeistMono.variable}`}
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
