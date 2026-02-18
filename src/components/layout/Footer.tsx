"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-32 border-t border-white/5"
      style={{ "--accent-color": "#7cff67" } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-16 mb-12 sm:mb-20">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Initiate a Partnership
            </h2>
            <p className="text-neutral-text-muted text-base sm:text-lg font-light mb-6 sm:mb-10 max-w-md">
              Whether you are a founder looking for funding or an investor
              looking for impact, we are ready to build.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-color)]" />
                </div>
                <div>
                  <p className="text-xs text-neutral-text-muted uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-white font-medium text-sm sm:text-base">
                    hello@yetinova.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-color)]" />
                </div>
                <div>
                  <p className="text-xs text-neutral-text-muted uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-white font-medium text-sm sm:text-base">
                    +977 XXX XXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-color)]" />
                </div>
                <div>
                  <p className="text-xs text-neutral-text-muted uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-white font-medium text-sm sm:text-base">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-surface-dark/30">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-text-muted focus:border-[var(--accent-color)]/50 focus:outline-none transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-text-muted focus:border-[var(--accent-color)]/50 focus:outline-none transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-1 sm:mb-2">
                  Inquiry Type
                </label>
                <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-[var(--accent-color)]/50 focus:outline-none transition-all appearance-none cursor-pointer text-sm sm:text-base">
                  <option value="">Select an option</option>
                  <option value="funding">Apply for Funding</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="government">Government & NGO</option>
                  <option value="general">General</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full min-h-[100px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-text-muted focus:border-[var(--accent-color)]/50 focus:outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell us about your idea or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--accent-color)] hover:bg-[#25A84D] rounded-xl text-white font-medium transition-all duration-300 text-sm sm:text-base"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full"></div>
              <span className="text-base sm:text-lg font-serif tracking-tight text-white">
                YetiNova
              </span>
            </div>
            <p className="text-neutral-text-muted text-sm max-w-md">
              The Launchpad for Himalayan Innovation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6">
            <p className="text-neutral-text-muted text-sm max-w-xl">
              We back Nepal&apos;s boldest builders. We turn raw concepts into
              global-grade startups&mdash;reinvesting our returns to fuel the
              next batch.
            </p>

            <div className="flex gap-4 sm:gap-8 text-sm">
              <a
                href="#"
                className="text-neutral-text-muted hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-text-muted hover:text-white transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>

          <p className="text-neutral-text-muted text-xs mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5">
            © 2026 YetiNova AI-Tech Pvt. Ltd. | Building locally, scaling
            globally.
          </p>
        </div>
      </div>
    </footer>
  );
}
