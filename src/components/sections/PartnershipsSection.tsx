"use client";

import { ChevronDown } from "lucide-react";

const PARTNERSHIP_TYPES = [
  {
    category: "Strategic Investment",
    description:
      "Deploy capital into export-ready ventures. From green finance to fintech, acquire equity in the startups that are building a stronger Nepal.",
  },
  {
    category: "Government & NGO Pilots",
    description:
      "Move beyond traditional grants. Co-design scalable technology pilots in education and disaster resilience that actually survive and scale.",
  },
  {
    category: "Corporate Innovation",
    description:
      "Partner with our labs to modernize your legacy systems. We deploy our builder teams to solve your organization's hardest technical problems.",
  },
  {
    category: "The Reinvestment Cycle",
    description:
      "Every partnership feeds the engine. A portion of all returns is reinvested into youth training and applied R&D.",
  },
];

export function PartnershipsSection() {
  return (
    <section
      id="partnerships"
      className="relative bg-black py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-32 border-t border-white/5"
      style={{ "--accent-color": "#71B28B" } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 sm:mb-4">
            Don&apos;t Just Fund. Fuel.
          </h2>
          <p className="text-neutral-text-muted text-base sm:text-lg md:text-xl font-light max-w-2xl">
            Partner with us to deploy capital into high-growth ventures and
            national infrastructure.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {PARTNERSHIP_TYPES.map((partnership, index) => (
            <div
              key={partnership.category}
              className="group border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[var(--accent-color)] transition-all duration-300"
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-4 mb-2">
                      <span className="text-xs font-mono font-medium text-[var(--accent-color)] flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-white group-hover:text-glow-accent transition-all truncate">
                        {partnership.category}
                      </h3>
                    </div>
                    <p className="text-neutral-text-muted font-light leading-relaxed max-w-2xl ml-6 sm:ml-8 text-sm sm:text-base">
                      {partnership.description}
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-text-muted group-hover:text-[var(--accent-color)] transition-all flex-shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--accent-color)] hover:bg-[#2F8F5F] rounded-full text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(61,168,117,0.3)] hover:shadow-[0_0_30px_rgba(61,168,117,0.5)] text-sm sm:text-base"
          >
            Become a Partner
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
