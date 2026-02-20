"use client";

import { ChevronDown, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { BlurGradient } from "@/components/ui/blurGradient";

import type { InquiryType } from "@/lib/validations/contact";

const INQUIRY_OPTIONS: { value: InquiryType; label: string }[] = [
  { value: "funding", label: "Apply for Funding" },
  { value: "partnership", label: "Strategic Partnership" },
  { value: "government", label: "Government & NGO" },
  { value: "general", label: "General" },
];

interface FormState {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
  websiteUrl: string;
}

const INITIAL_FORM_STATE: FormState = {
  name: "",
  email: "",
  inquiryType: "",
  message: "",
  websiteUrl: "",
};

export function Footer() {
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldName = id.replace("contact-", "");
    setFormState((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, inquiryType: value }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.inquiryType) {
      toast.error("Validation error", {
        description: "Please select an inquiry type.",
      });
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          inquiryType: formState.inquiryType,
          message: formState.message,
          websiteUrl: formState.websiteUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          toast.error("Too many requests", {
            description: `Please wait ${data.error?.retryAfter || 60} seconds before trying again.`,
          });
        } else if (response.status === 422 && data.error?.details) {
          const firstError = data.error.details[0];
          toast.error("Validation error", {
            description: firstError?.message || "Please check your input.",
          });
        } else {
          toast.error("Something went wrong", {
            description: data.error?.message || "Please try again later.",
          });
        }
        return;
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24-48 hours.",
      });

      setFormState(INITIAL_FORM_STATE);
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or email us directly at hello@yetinova.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-32 border-t border-white/5 overflow-visible"
      style={{ "--accent-color": "#7cff67" } as React.CSSProperties}
    >
      <BlurGradient
        colorStops={["#5227FF", "#7cff67", "#606FCC"]}
        speed="slow"
        opacity={0.4}
        className="inset-0"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-16 mb-12 sm:mb-20">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Initiate a Partnership
            </h2>
            <p className="text-neutral-text-muted text-base sm:text-lg font-light mb-6 sm:mb-10 max-w-md">
              Whether you are a founder looking for funding or an investor looking for impact, we
              are ready to build.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-(--accent-color)/10 border border-(--accent-color)/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-(--accent-color)" />
                </div>
                <div>
                  <p className="text-xs text-neutral-text-muted uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base">hello@yetinova.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-(--accent-color)/10 border border-(--accent-color)/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-(--accent-color)" />
                </div>
                <div>
                  <p className="text-xs text-neutral-text-muted uppercase tracking-wider">Phone</p>
                  <p className="text-white font-medium text-sm sm:text-base">+977 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-(--accent-color)/10 border border-(--accent-color)/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-(--accent-color)" />
                </div>
                <div>
                  <p className="text-xs text-neutral-text-muted uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-white font-medium text-sm sm:text-base">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-surface-dark/30">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <input
                id="contact-websiteUrl"
                type="text"
                name="websiteUrl"
                value={formState.websiteUrl || ""}
                onChange={handleInputChange}
                className="absolute -left-[9999px]"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-1 sm:mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formState.name || ""}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    minLength={2}
                    maxLength={100}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-text-muted focus:border-(--accent-color)/50 focus:outline-none transition-all text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-1 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formState.email || ""}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-text-muted focus:border-(--accent-color)/50 focus:outline-none transition-all text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div ref={dropdownRef} className="relative">
                <label
                  htmlFor="contact-inquiryType"
                  className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-1 sm:mb-2"
                >
                  Inquiry Type
                </label>

                {/* Custom Select Button */}
                <button
                  type="button"
                  id="contact-inquiryType"
                  disabled={isSubmitting}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed text-left ${
                    isDropdownOpen
                      ? "bg-black/80 border-(--accent-color)/50 text-white shadow-[0_0_15px_rgba(124,255,103,0.1)]"
                      : "bg-black/50 border-white/10 text-white hover:border-white/20"
                  }`}
                >
                  <span
                    className={!formState.inquiryType ? "text-neutral-text-muted" : "text-white"}
                  >
                    {formState.inquiryType
                      ? INQUIRY_OPTIONS.find((opt) => opt.value === formState.inquiryType)?.label
                      : "Select an option"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-neutral-text-muted transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180 text-(--accent-color)" : ""
                    }`}
                  />
                </button>

                {/* Custom Dropdown Options */}
                {isDropdownOpen && (
                  <div className="absolute z-50 w-full mt-2 py-2 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-xl backdrop-blur-xl">
                    {INQUIRY_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleSelectChange(option.value)}
                        className={`w-full text-left px-4 py-2.5 text-sm sm:text-base transition-colors ${
                          formState.inquiryType === option.value
                            ? "bg-(--accent-color)/10 text-(--accent-color)"
                            : "text-neutral-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Hidden input for form submission if needed by traditional form handlers */}
                <input
                  type="hidden"
                  name="inquiryType"
                  value={formState.inquiryType || ""}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs text-neutral-text-muted uppercase tracking-wider mb-1 sm:mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formState.message || ""}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                  minLength={10}
                  maxLength={2000}
                  className="w-full min-h-[100px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-text-muted focus:border-(--accent-color)/50 focus:outline-none transition-all resize-none text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your idea or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-(--accent-color) hover:bg-[#25A84D] rounded-xl text-white font-medium transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 bg-(--accent-color) rounded-full" />
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
              We back Nepal&apos;s boldest builders. We turn raw concepts into global-grade
              startups&mdash;reinvesting our returns to fuel the next batch.
            </p>

            <div className="flex gap-4 sm:gap-8 text-sm">
              <button
                type="button"
                onClick={() => {
                  /* TODO: Add privacy policy link */
                }}
                className="text-neutral-text-muted hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => {
                  /* TODO: Add terms of use link */
                }}
                className="text-neutral-text-muted hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Terms of Use
              </button>
            </div>
          </div>

          <p className="text-neutral-text-muted text-xs mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5">
            © 2026 YetiNova AI-Tech Pvt. Ltd. | Building locally, scaling globally.
          </p>
        </div>
      </div>
    </footer>
  );
}
