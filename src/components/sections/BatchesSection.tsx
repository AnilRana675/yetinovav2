"use client";

import { VentureCard } from "@/components/ui/Card";

const FOCUS_PILLARS = [
  "Technology & Future Research",
  "Sustainability & Green Finance",
  "Vital Services",
  "Social Impact",
];

const STARTUPS = [
  {
    badge: "Winter 2025 (W25)",
    badgeColor: "bg-white/10 text-neutral-text border-white/20",
    name: "AgroConnect",
    tagline: "The Digital Operating System for Farms.",
    description:
      "A seamless ecosystem connecting rural agriculture to modern markets and supply chains.",
    status: "Seed Stage",
    statusColor: "text-amber-400",
  },
  {
    badge: "Winter 2026 (W26)",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    name: "AstraYug",
    tagline: "Digital Infrastructure for Scaling Brands.",
    description:
      "High-performance web platforms and digital identity management systems designed for global scale.",
    status: "Live / Scaling",
    statusColor: "text-green-400",
  },
];

export function BatchesSection() {
  return (
    <section
      id="ventures"
      className="relative bg-black py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-32 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[15vw] sm:text-[20vw] font-serif font-bold text-white/[0.02] tracking-tighter whitespace-nowrap">
          ASCEND
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 sm:mb-16">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 sm:mb-4">
            Innovation Batches
          </h2>
          <p className="text-neutral-text-muted text-base sm:text-lg md:text-xl font-light max-w-2xl">
            Seasonal teams of young builders shipping global-grade work.
          </p>
        </div>

        <div className="mb-12 sm:mb-20">
          <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-4 sm:mb-6">
            Core Focus Pillars
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {FOCUS_PILLARS.map((pillar) => (
              <div
                key={pillar}
                className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10 bg-white/5 text-neutral-text text-xs sm:text-sm font-medium hover:border-purple-500/30 hover:bg-purple-500/10 transition-all cursor-default"
              >
                {pillar}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {STARTUPS.map((startup, index) => (
            <VentureCard
              key={startup.name}
              badge={startup.badge}
              badgeColor={startup.badgeColor}
              name={startup.name}
              tagline={startup.tagline}
              description={startup.description}
              status={startup.status}
              statusColor={startup.statusColor}
              offsetTop={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
