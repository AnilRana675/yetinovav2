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

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 px-8 py-6 md:px-16 flex justify-between items-center transition-all duration-500",
        isScrolled
          ? "bg-black/50 backdrop-blur-md py-4"
          : "bg-transparent backdrop-blur-sm py-8",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <Link
          href="/"
          className="text-xl font-serif font-medium tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          YetiNova
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 text-sm font-light tracking-wide text-white/70">
        <Link
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Manifesto
        </Link>
        <Link
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Ventures
        </Link>
        <Link
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Ecosystem
        </Link>
      </div>

      <div className="hidden md:block">
        <Link
          href="#"
          className="text-xs uppercase tracking-widest text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white z-50 relative"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="material-symbols-outlined">
          {isMobileMenuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in zoom-in-95 duration-200">
          <Link
            href="#"
            className="text-2xl font-serif text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Manifesto
          </Link>
          <Link
            href="#"
            className="text-2xl font-serif text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ventures
          </Link>
          <Link
            href="#"
            className="text-2xl font-serif text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ecosystem
          </Link>
          <Link
            href="#"
            className="text-sm uppercase tracking-widest text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
