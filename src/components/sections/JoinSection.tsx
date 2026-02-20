"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Squares from "@/components/ui/Squares";

const CHECKLIST_ITEMS = [
  "You have an MVP or a strong prototype.",
  "You are obsessed with solving a specific problem.",
  "You are ready to commit to a high-intensity cycle.",
];

export function JoinSection() {
  return (
    <section
      id="join"
      className="relative bg-black py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-32 overflow-hidden"
      style={{ "--accent-color": "#77C76C" } as React.CSSProperties}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      {/* Animated Grid Background - Desktop */}
      <div className="hidden md:block absolute inset-0 z-[5]">
        <Squares
          direction="down"
          speed={0.25}
          borderColor="var(--accent-color)"
          squareSize={75}
          hoverFillColor="var(--accent-color)"
        />
      </div>
      {/* Animated Grid Background - Mobile */}
      <div className="md:hidden absolute inset-0 z-[5]">
        <Squares
          direction="down"
          speed={0.25}
          borderColor="var(--accent-color)"
          squareSize={40}
          hoverFillColor="var(--accent-color)"
        />
      </div>

      {/* Top blur overlay */}
      <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-black via-black/80 to-transparent z-[6] pointer-events-none" />

      {/* Bottom blur overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black via-black/80 to-transparent z-[6] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20 pointer-events-none">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
            Don&apos;t just code. Launch.
          </h2>
          <p className="text-neutral-text-muted text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto px-2 sm:px-0">
            Join the next YetiNova Batch. Work with mentors, ship real products,
            and graduate with an investable company, not just a certificate.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10 sm:mb-16">
          {/* Pill-shaped title */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#77C76C]">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-black">
                Who Should Apply?
              </p>
            </div>
          </div>

          {/* Checklist items - separate divs */}
          <div className="space-y-4 pointer-events-none">
            {CHECKLIST_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 sm:gap-6 p-3 sm:p-4 rounded-xl border border-white/10 bg-[#111] shadow-md relative z-20 pointer-events-auto"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--accent-color)]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-color)]" />
                </div>
                <p className="text-neutral-text font-light text-sm sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pointer-events-auto">
          <Button
            asChild
            variant="white"
            size="xl"
            className="group transition-all duration-300"
          >
            <a href="#contact">
              Apply for Winter &apos;26
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="mt-4 sm:mt-6 text-neutral-text-muted text-xs sm:text-sm">
            Applications open &bull; Next batch starts January 2026
          </p>
        </div>
      </div>
    </section>
  );
}
