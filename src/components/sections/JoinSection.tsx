"use client";

import { Check, ArrowRight } from "lucide-react";

const CHECKLIST_ITEMS = [
  "You have an MVP or a strong prototype.",
  "You are obsessed with solving a specific problem.",
  "You are ready to commit to a high-intensity cycle.",
];

export function JoinSection() {
  return (
    <section
      id="join"
      className="relative bg-[#0a0a0a] py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-32 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
            Don&apos;t just code. Launch.
          </h2>
          <p className="text-neutral-text-muted text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto px-2 sm:px-0">
            Join the next YetiNova Batch. Work with mentors, ship real products,
            and graduate with an investable company, not just a certificate.
          </p>
        </div>

        <div className="mb-10 sm:mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#a3ff12] mb-4 sm:mb-6 text-center">
            Who Should Apply
          </p>
          <div className="space-y-3 sm:space-y-4">
            {CHECKLIST_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#a3ff12]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#a3ff12]" />
                </div>
                <p className="text-neutral-text font-light text-sm sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-full font-semibold text-base sm:text-lg hover:bg-neutral-100 transition-all duration-300 group"
          >
            Apply for Winter &apos;26
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 sm:mt-6 text-neutral-text-muted text-xs sm:text-sm">
            Applications open &bull; Next batch starts January 2026
          </p>
        </div>
      </div>
    </section>
  );
}
