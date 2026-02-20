"use client";

import { Globe, Lightbulb, Rocket, Search, Shield, TrendingUp, Zap } from "lucide-react";
import { CardWithIcon, ValueCard } from "@/components/ui/Card";
import { NodeAnimation } from "@/components/ui/NodeAnimation";

const MODEL_STAGES = [
  {
    icon: Search,
    title: "Selection",
    subtitle: "Finding Raw Talent",
    description:
      "We identify and select ventures and individuals with exceptional potential, focusing on those who demonstrate grit, innovation, and a clear vision for impact.",
  },
  {
    icon: Zap,
    title: "The Sprint",
    subtitle: "Intensive Development",
    description:
      "Through a 12-week accelerator program, we provide the capital, mentorship, and network needed to rapidly transform ideas into viable, market-ready products.",
  },
  {
    icon: Rocket,
    title: "The Launch",
    subtitle: "Go-to-Market",
    description:
      "We facilitate market entry, connecting our builders with early adopters, strategic partners, and the necessary resources to achieve sustainable traction.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    subtitle: "Sustainable Growth",
    description:
      "Our support continues beyond launch, providing ongoing guidance and connections to fuel long-term growth and establish ventures as leaders in their sectors.",
  },
];

const DNA_VALUES = [
  {
    icon: Lightbulb,
    title: "Builders First",
    description:
      "We exist to serve those who build. Our entire ecosystem is designed to remove friction and accelerate the journey from idea to impact.",
  },
  {
    icon: Shield,
    title: "Default to Gritty",
    description:
      "We believe talent is universal, but opportunity is not. We bet on determination over pedigree and back those who persist through challenges.",
  },
  {
    icon: Globe,
    title: "Global Standard",
    description:
      "We benchmark against the best in the world. Our ventures compete globally, not locally, and we prepare them for international markets from day one.",
  },
];

export function ModelAboutSection() {
  return (
    <section
      id="model"
      className="relative py-24 sm:py-32 lg:py-40"
      style={{ "--accent-color": "#6B9EAA" } as React.CSSProperties}
    >
      <div className="absolute inset-0 z-0">
        <NodeAnimation glowColor="107, 158, 170" coreColor="40, 80, 95" />
      </div>

      {/* Top Fade Mask - blends with BatchesSection (black) */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-48 bg-linear-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Bottom Fade Mask - blends with PartnershipsSection (black) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-linear-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        {/* Model Section */}
        <div className="mb-24 sm:mb-32 lg:mb-40">
          <div className="mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
              Our Model
            </h2>
            <p className="text-neutral-text-muted text-lg sm:text-xl md:text-2xl font-light max-w-3xl">
              From idea to market in four phases. We provide the structure, resources, and network
              to turn vision into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
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

        {/* About Section */}
        <div id="about">
          <div className="mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
              The Yeti Code
            </h2>
            <p className="text-neutral-text-muted text-lg sm:text-xl md:text-2xl font-light max-w-3xl mb-8 sm:mb-12">
              We are more than an accelerator. We are a movement of builders committed to solving
              Nepal&apos;s hardest problems through technology and entrepreneurship.
            </p>
            <p className="text-neutral-text/80 font-light leading-relaxed max-w-3xl text-base sm:text-lg">
              Born from the belief that Nepal&apos;s greatest export should be innovation, not
              labor, we exist to prove that world-class tech companies can emerge from the
              Himalayas. Every line of code we write, every product we ship, and every entrepreneur
              we back is a step toward that future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
    </section>
  );
}
