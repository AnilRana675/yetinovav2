"use client";

import { Building2, FileText, Scale, Users } from "lucide-react";
import { CardWithIcon } from "@/components/ui/Card";

const GOVERNANCE_PILLARS = [
  {
    icon: Scale,
    title: "Legal Foundation",
    description: "Clear ownership frameworks and compliance.",
  },
  {
    icon: Users,
    title: "Board Oversight",
    description: "Strategic direction anchored by experienced leadership.",
  },
  {
    icon: FileText,
    title: "Radical Transparency",
    description: "Financial discipline and documented decision-making.",
  },
  {
    icon: Building2,
    title: "Institutional Continuity",
    description: "Built to last beyond the hype cycle.",
  },
];

export function GovernanceSection() {
  return (
    <section
      id="governance"
      className="relative bg-background-light py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-32 overflow-hidden"
      style={{ "--accent-color": "#7DDC4D" } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-600 mb-3 sm:mb-4">
            Trust & Compliance
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-3 sm:mb-4">
            Governance
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg font-light max-w-2xl">
            Innovation requires a solid foundation. We protect our investors and founders with
            rigorous structure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GOVERNANCE_PILLARS.map((pillar) => (
            <CardWithIcon
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              variant="light"
            />
          ))}
        </div>

        <div className="mt-10 sm:mt-16 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-100 border border-neutral-200">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0">
              <span className="text-xl sm:text-2xl font-serif text-neutral-400">®</span>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 mb-2 text-base sm:text-lg">
                Fully Compliant & Registered
              </h4>
              <p className="text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
                YetiNova operates under full legal compliance with the Government of Nepal. All
                ventures are incorporated with proper governance structures, audited financials, and
                transparent cap tables. We maintain institutional standards while supporting
                early-stage innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
