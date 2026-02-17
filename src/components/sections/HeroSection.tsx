"use client";

import SplitText from "@/components/ui/SplitText";
import ShinyText from "@/components/ui/ShinyText";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/components/ui/aurora/Aurora"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-linear-to-b from-[#a3ff12]/10 to-black" />
  ),
});

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-32 pt-20 sm:pt-24 lg:pt-0 pb-12 sm:pb-16 overflow-hidden bg-black text-center">
      <div className="absolute inset-0 z-0">
        <Aurora
          amplitude={1.2}
          blend={0.5}
          speed={0.5}
          
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center px-2 sm:px-4">
        <div className="mb-4 sm:mb-6">
          <SplitText
            text="Crafting The"
            className="font-serif text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] sm:leading-[0.95] tracking-tight text-white/90"
            delay={50}
            duration={1.5}
            splitType="words"
            textAlign="center"
          />
          <ShinyText
            text="Boldest Builders."
            disabled={false}
            speed={3}
            className="font-serif text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] sm:leading-[0.95] tracking-tight"
            color="#a3ff12"
            shineColor="#ffffff"
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-text/80 font-light leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
          Funding. Mentorship. Network. <br />
          <br className="hidden sm:block" />
          <span className="text-neutral-text/60 text-sm sm:text-base md:text-lg lg:text-2xl">
            Bring your idea or MVP. We provide the capital and the playbook to
            turn your vision into Nepal&apos;s next big tech company.
          </span>
        </p>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-white text-2xl sm:text-3xl font-light">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
