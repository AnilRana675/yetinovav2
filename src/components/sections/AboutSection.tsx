"use client";

import { Lightbulb, Shield, Globe } from "lucide-react";
import { ValueCard, LeaderCard } from "@/components/ui/Card";

const DNA_VALUES = [
  {
    icon: Lightbulb,
    title: "Builders First",
    description:
      "We put young makers in the lead. We learn by shipping real products, not theory.",
  },
  {
    icon: Shield,
    title: "Default to Gritty",
    description:
      "Startups are hard. We value resilience, transparency, and systems that hold up in the real world.",
  },
  {
    icon: Globe,
    title: "Global Standard",
    description:
      "We build locally to compete globally. Every project must aim for export-grade excellence.",
  },
];

const LEADERSHIP = [
  {
    role: "CEO",
    name: "Sushant Dahal",
  },
  {
    role: "CBO",
    name: "Roshan Bishwakarma",
  },
  {
    role: "CTO",
    name: "Anil Rana",
  },
];

export function AboutSection() {
  return (
    <section
      id="manifesto"
      className="relative bg-black py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-16 mb-16 sm:mb-24">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-8">
              Redefining &ldquo;Made in Nepal&rdquo;
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-neutral-text/80 font-light leading-relaxed">
              <p>
                For too long, we have exported labor. It is time to export
                innovation.
              </p>
              <p className="text-neutral-text-muted">
                YetiNova is the engine for Nepal&apos;s brightest young minds.
                We bridge the gap between raw ambition and global capital. We
                back export-ready startups in AI and Green Energy, and reinvest
                our wins into R&D&mdash;ensuring the cycle continues for the
                next generation.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#a3ff12] mb-6 sm:mb-8">
              Our DNA
            </p>
            <div className="space-y-6 sm:space-y-8">
              {DNA_VALUES.map((value) => (
                <ValueCard
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 sm:pt-16">
          <p className="text-xl sm:text-3xl font-bold tracking-widest uppercase text-[#a3ff12] mb-8 sm:mb-10">
            THIS SECTION NEEDS TO CHANGE (IGNORE THIS SECTION )
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <LeaderCard
              role="The Chairman"
              name="Basudev P. Gautam"
              quote="We aren't here for quick flips. We are building the infrastructure for Nepal's digital future."
              variant="featured"
            />

            {LEADERSHIP.map((leader) => (
              <LeaderCard
                key={leader.name}
                role={leader.role}
                name={leader.name}
                variant="default"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
