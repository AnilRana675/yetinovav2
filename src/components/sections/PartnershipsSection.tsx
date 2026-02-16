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
      className="relative bg-black py-32 px-8 md:px-16 lg:px-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Don&apos;t Just Fund. Fuel.
          </h2>
          <p className="text-neutral-text-muted text-lg md:text-xl font-light max-w-2xl">
            Partner with us to deploy capital into high-growth ventures and
            national infrastructure.
          </p>
        </div>

        {/* Partnership Accordion */}
        <div className="space-y-4">
          {PARTNERSHIP_TYPES.map((partnership, index) => (
            <div
              key={partnership.category}
              className="group border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs font-medium text-purple-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-glow-purple transition-all">
                        {partnership.category}
                      </h3>
                    </div>
                    <p className="text-neutral-text-muted font-light leading-relaxed max-w-2xl ml-8">
                      {partnership.description}
                    </p>
                  </div>
                  <ChevronDown className="w-6 h-6 text-neutral-text-muted group-hover:text-purple-400 transition-all flex-shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-full text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          >
            Become a Partner
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
