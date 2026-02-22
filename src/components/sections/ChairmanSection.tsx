"use client";

import Image from "next/image";

export function ChairmanSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden flex lg:min-h-[90vh] items-center"
      style={{ "--accent-color": "#6B9EAA" } as React.CSSProperties}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#050505] to-black z-0" />

      {/* Subtle Glow Behind Content */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-(--accent-color)/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] bg-(--accent-color)/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-(--accent-color)/5 transform transition-transform duration-700 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-neutral-900">
                <div className="w-full h-full bg-linear-to-br from-neutral-800 to-black flex items-center justify-center text-neutral-700 font-mono text-xs tracking-widest uppercase">
                  Chairman Portrait Placeholder
                </div>
                <Image
                  src="/images/chairman.avif"
                  alt="Basudev P. Gautam"
                  fill
                  sizes="(max-width: 1024px) 448px, 50vw"
                  className="object-cover transition-opacity duration-500"
                />
              </div>
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l border-b border-(--accent-color)/30 rounded-bl-3xl pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-r border-t border-(--accent-color)/30 rounded-tr-3xl pointer-events-none" />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8 lg:mb-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-(--accent-color)/10 border border-(--accent-color)/20 mb-5 lg:mb-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-(--accent-color)">
                  Executive Chairman
                </span>
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-white mb-6 border-l-2 border-(--accent-color)/50 pl-5 sm:pl-6 lg:pl-8">
                &ldquo;YetiNova was forged in the reality of the marketplace, not the comfort of a
                classroom.&rdquo;
              </blockquote>

              <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed pl-5 sm:pl-6 lg:pl-8">
                We believe that true innovation happens when grit meets opportunity. We don&apos;t
                just write checks. We roll up our sleeves to build the digital operating system for
                the next generation of Himalayan entrepreneurs.
              </p>
            </div>

            <div className="mb-8 lg:mb-10">
              <p className="text-xs font-mono font-medium tracking-widest uppercase text-neutral-500 mb-5 flex items-center gap-4">
                <span className="h-px bg-white/10 flex-1" />
                The Long-Term View
                <span className="h-px bg-white/10 flex-1" />
              </p>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <h4 className="font-mono text-sm uppercase tracking-wide text-white/90 whitespace-nowrap">
                    Systemic Impact <span className="hidden sm:inline text-white/20 ml-2">—</span>
                  </h4>
                  <p className="text-sm text-neutral-400 font-light">
                    Community to solutions across the market to prove and scale.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <h4 className="font-mono text-sm uppercase tracking-wide text-white/90 whitespace-nowrap">
                    Infrastructure <span className="hidden sm:inline text-white/20 ml-2">—</span>
                  </h4>
                  <p className="text-sm text-neutral-400 font-light">
                    The cornerstone of entrepreneurial growth and digital connection.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature & Link */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-4">
              <div className="w-12 h-px bg-(--accent-color)/50" />
              <div className="font-serif text-xl sm:text-2xl italic text-white/90">
                Mr. Basudev P. Gautam
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
