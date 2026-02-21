"use client";

import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
];

export function ProjectFooter() {
  return (
    <footer
      className="relative bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-32 border-t border-white/5"
      style={{ "--accent-color": "#7cff67" } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12">
          <div className="flex flex-col gap-3 sm:gap-4 max-w-sm">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 bg-(--accent-color) rounded-full" />
              <span className="text-lg sm:text-xl font-serif tracking-tight text-white">
                YetiNova
              </span>
            </div>
            <p className="text-neutral-text-muted text-sm">
              The Launchpad for Himalayan Innovation.
            </p>
            <p className="text-neutral-text-muted text-sm">
              We back Nepal&apos;s boldest builders. We turn raw concepts into global-grade
              startups&mdash;reinvesting our returns to fuel the next batch.
            </p>
          </div>

          <div>
            <h3 className="text-xs text-neutral-text-muted uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 mt-8 sm:mt-12 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-neutral-text-muted text-xs">
              © 2026 YetiNova AI-Tech Pvt. Ltd. | Building locally, scaling globally.
            </p>
            <div className="flex gap-4 sm:gap-8 text-xs">
              <button
                type="button"
                className="text-neutral-text-muted hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="text-neutral-text-muted hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
