import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black text-neutral-text font-sans selection:bg-purple-500 selection:text-white transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
