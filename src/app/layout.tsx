import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";
import "material-symbols/outlined.css";
import "./globals.css";

const geistMono = GeistMono;
const hongKong = localFont({
  src: "../../public/font/HongKong-Medium.ttf",
  variable: "--font-hongkong",
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
    <html lang="en" className={`dark ${geistMono.variable} ${hongKong.variable}`}>
      <body
        className={`antialiased bg-black text-neutral-text font-mono selection:bg-[#a3ff12] selection:text-black transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
