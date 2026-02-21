"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "/projects", label: "Ventures" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "/news", label: "News" },
  { href: "/resources", label: "Resources" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const now = Date.now();

      setIsScrolled(currentScrollY > 50);

      // Only update visibility if enough time has passed (debounce)
      if (now - lastScrollTime.current > 100) {
        setIsVisible(() => {
          // Always show when near top
          if (currentScrollY < 100) {
            return true;
          }

          // Hide when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY.current) {
            return false;
          }

          return true;
        });

        lastScrollTime.current = now;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent backdrop-blur-sm",
          isVisible ? "translate-y-0" : "-translate-y-full"
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
            <div className="w-2 h-2 bg-white rounded-full" />
            <Link
              href="/"
              className="text-lg sm:text-xl font-serif font-medium tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              YetiNova
            </Link>
          </div>

          <div className="hidden md:flex gap-6 lg:gap-10 text-sm font-light tracking-wide">
            {NAV_LINKS.map((link) => {
              const isActive = link.href.startsWith("#")
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors duration-300",
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
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
            type="button"
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
          className="fixed inset-0 bg-black/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-4 md:hidden"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.href.startsWith("#")
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xl sm:text-2xl font-serif py-3 px-6 hover:bg-white/5 rounded-xl transition-colors active:scale-95 min-w-[160px] sm:min-w-[200px] text-center",
                  isActive ? "text-white" : "text-white/70"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
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
