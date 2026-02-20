"use client";

import { Lightbulb, Network } from "lucide-react";
import Image from "next/image";

export function ChairmanSection() {
  return (
    <section id="about" style={{ "--accent-color": "#6B9EAA" } as React.CSSProperties}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column - Image */}
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
          {/* Placeholder for Chairman image - adapting to dark mode aesthetic */}
          <div className="absolute inset-0 bg-neutral-900 rounded-sm overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center text-neutral-700 font-mono text-xs tracking-widest uppercase">
              Chairman Portrait Placeholder
            </div>
            {
              <Image
                src="/images/chairman.avif"
                alt="Basudev P. Gautam"
                fill
                sizes="(max-width: 1024px) 448px, 50vw"
                className="object-cover"
              />
            }
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center">
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-white mb-8">
            &ldquo;YetiNova was forged in the reality of the marketplace, not the comfort of a
            classroom.&rdquo;
          </blockquote>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              We believe that true innovation happens when grit meets opportunity. We don&apos;t
              just write checks. We roll up our sleeves to build the digital operating system for
              the next generation of Himalayan entrepreneurs.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--accent-color)] mb-6">
              The Long-Term View
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/90">
                  <Lightbulb className="w-5 h-5" strokeWidth={1.5} />
                  <h4 className="font-mono text-sm uppercase tracking-wide">Systemic Impact</h4>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Systemic impact to prove and scale. Community to solutions across the market.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/90">
                  <Network className="w-5 h-5" strokeWidth={1.5} />
                  <h4 className="font-mono text-sm uppercase tracking-wide">Infrastructure</h4>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Infrastructure is the cornerstone of entrepreneurial growth, connecting and
                  building the digital processes.
                </p>
              </div>
            </div>
          </div>

          {/* Signature & Link */}
          <div className="space-y-6">
            <div className="font-serif text-2xl italic text-white/90">Mr. Basudev P. Gautam</div>
            <p className="font-mono text-sm uppercase tracking-widest text-[var(--accent-color)]">
              Executive Chairman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
