"use client";

import { Search, Zap, Rocket, TrendingUp } from "lucide-react";
import { CardWithIcon } from "@/components/ui/Card";

const MODEL_STAGES = [
  {
    icon: Search,
    title: "Selection",
    subtitle: "Scouting the Bold",
    description:
      "We identify high-potential founders with unique insights. We don't fund business plans; we fund obsession and grit.",
  },
  {
    icon: Zap,
    title: "The Sprint",
    subtitle: "Build & Break",
    description:
      "Rapid prototyping. We transform concepts into MVPs with robust architecture. If it doesn't work, we kill it fast. If it works, we double down.",
  },
  {
    icon: Rocket,
    title: "The Launch",
    subtitle: "Market Reality",
    description:
      "Governance from Day 1. We structure the venture, handle the legal compliance, and push the product to real users.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    subtitle: "Global Reach",
    description:
      "Preparing the startup for national expansion and export readiness. We connect founders to the capital needed to grow.",
  },
];

export function ModelSection() {
  return (
    <section
      id="model"
      className="relative bg-[#0a0a0a] py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20 text-center">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
            Our Model
          </h2>
          <p className="text-neutral-text-muted text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto px-2 sm:px-0">
            We don&apos;t do classrooms. We do product sprints. A rigorous
            four-stage framework to turn ideas into assets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {MODEL_STAGES.map((stage, index) => (
            <CardWithIcon
              key={stage.title}
              icon={stage.icon}
              title={stage.title}
              subtitle={stage.subtitle}
              description={stage.description}
              stepNumber={index + 1}
              variant="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
