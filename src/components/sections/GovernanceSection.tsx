"use client";

import { Scale, Users, FileText, Building2 } from "lucide-react";
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
      className="relative bg-[#f9f8f6] py-32 px-8 md:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">
            Trust & Compliance
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4">
            Governance
          </h2>
          <p className="text-neutral-600 text-lg font-light max-w-2xl">
            Innovation requires a solid foundation. We protect our investors and
            founders with rigorous structure.
          </p>
        </div>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Compliance Note */}
        <div className="mt-16 p-8 rounded-2xl bg-neutral-100 border border-neutral-200">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-serif text-neutral-400">®</span>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 mb-2">
                Fully Compliant & Registered
              </h4>
              <p className="text-neutral-600 font-light leading-relaxed">
                YetiNova operates under full legal compliance with the
                Government of Nepal. All ventures are incorporated with proper
                governance structures, audited financials, and transparent cap
                tables. We maintain institutional standards while supporting
                early-stage innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
