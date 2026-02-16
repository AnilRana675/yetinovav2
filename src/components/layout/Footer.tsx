"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black py-24 px-8 md:px-16 lg:px-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Initiate a Partnership
            </h2>
            <p className="text-neutral-text-muted text-lg font-light mb-10 max-w-md">
              Whether you are a founder looking for funding or an investor
              looking for impact, we are ready to build.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-text-muted uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-white font-medium">hello@yetinova.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-text-muted uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-white font-medium">+977 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-text-muted uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-white font-medium">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-3xl border border-white/10 bg-surface-dark/30">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-text-muted focus:border-purple-500/50 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-text-muted focus:border-purple-500/50 focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-2">
                  Inquiry Type
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-purple-500/50 focus:outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Select an option</option>
                  <option value="funding">Apply for Funding</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="government">Government & NGO</option>
                  <option value="general">General</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-text-muted focus:border-purple-500/50 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your idea or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl text-white font-medium transition-all duration-300"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-lg font-serif tracking-tight text-white">
                YetiNova
              </span>
            </div>
            <p className="text-neutral-text-muted text-sm max-w-md">
              The Launchpad for Himalayan Innovation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <p className="text-neutral-text-muted text-sm max-w-xl">
              We back Nepal&apos;s boldest builders. We turn raw concepts into
              global-grade startups&mdash;reinvesting our returns to fuel the
              next batch.
            </p>

            <div className="flex gap-8 text-sm">
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

          <p className="text-neutral-text-muted text-xs mt-8 pt-8 border-t border-white/5">
            © 2026 YetiNova AI-Tech Pvt. Ltd. | Building locally, scaling
            globally.
          </p>
        </div>
      </div>
    </footer>
  );
}
