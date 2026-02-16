"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-black/80 backdrop-blur-md"
            : "bg-transparent backdrop-blur-sm"
        )}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div
          className={cn(
            "px-4 sm:px-6 lg:px-8 xl:px-16 flex justify-between items-center transition-all duration-500",
            isScrolled ? "py-3 sm:py-4" : "py-4 sm:py-6 lg:py-8"
          )}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <Link
              href="/"
              className="text-lg sm:text-xl font-serif font-medium tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              YetiNova
            </Link>
          </div>

          <div className="hidden md:flex gap-6 lg:gap-10 text-sm font-light tracking-wide text-white/70">
            <Link
              href="#manifesto"
              className="hover:text-white transition-colors duration-300"
            >
              Manifesto
            </Link>
            <Link
              href="#ventures"
              className="hover:text-white transition-colors duration-300"
            >
              Ventures
            </Link>
            <Link
              href="#ecosystem"
              className="hover:text-white transition-colors duration-300"
            >
              Ecosystem
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="text-xs uppercase tracking-widest text-white border border-white/20 px-4 lg:px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 md:hidden"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <Link
            href="#manifesto"
            className="text-xl sm:text-2xl font-serif text-white py-3 px-6 hover:bg-white/5 rounded-xl transition-colors active:scale-95 min-w-[200px] text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Manifesto
          </Link>
          <Link
            href="#ventures"
            className="text-xl sm:text-2xl font-serif text-white py-3 px-6 hover:bg-white/5 rounded-xl transition-colors active:scale-95 min-w-[200px] text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ventures
          </Link>
          <Link
            href="#ecosystem"
            className="text-xl sm:text-2xl font-serif text-white py-3 px-6 hover:bg-white/5 rounded-xl transition-colors active:scale-95 min-w-[200px] text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ecosystem
          </Link>
          <Link
            href="#contact"
            className="text-sm uppercase tracking-widest text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 mt-4 active:scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
