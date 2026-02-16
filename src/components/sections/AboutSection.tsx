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
      id="about"
      className="relative bg-black py-32 px-8 md:px-16 lg:px-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Split Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* The Manifesto */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              Redefining &ldquo;Made in Nepal&rdquo;
            </h2>
            <div className="space-y-6 text-lg text-neutral-text/80 font-light leading-relaxed">
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

          {/* Our DNA - Core Values */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-8">
              Our DNA
            </p>
            <div className="space-y-8">
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

        {/* Leadership & Team */}
        <div className="border-t border-white/10 pt-16">
          <p className="text-3xl font-bold tracking-widest uppercase text-purple-400 mb-10">
            THIS SECTION NEEDS TO CHANGE (IGNORE THIS SECTION )
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Chairman with Quote */}
            <LeaderCard
              role="The Chairman"
              name="Basudev P. Gautam"
              quote="We aren't here for quick flips. We are building the infrastructure for Nepal's digital future."
              variant="featured"
            />

            {/* Exec Team */}
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
