"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AuroraBackground } from "./AuroraBackground";
import { CurrentlyBackingWrapper } from "./CurrentlyBackingWrapper";
import { HeroAnimations } from "./HeroAnimations";
import { HeroContent } from "./HeroContent";

const SUBTITLE_1 = "Funding. Mentorship. Network.";
const SUBTITLE_2 =
  "Bring your idea or MVP. We provide the capital and the playbook to turn your vision into Nepal's next big tech company.";

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 300;
      const currentProgress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const arrowOpacity = Math.max(1 - scrollProgress * 2, 0);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-32 pt-20 sm:pt-24 lg:pt-0 pb-12 sm:pb-16 overflow-hidden bg-black text-center"
      style={{ "--accent-color": "#606FCC" } as React.CSSProperties}
    >
      <AuroraBackground />

      <HeroContent>
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-text/80 font-light leading-relaxed max-w-3xl mx-auto text-center hero-ghost-text"
            data-animate="subtitle-1"
          >
            {SUBTITLE_1}
          </p>
          <motion.a
            href="https://worldmerchantinvest.com/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.25, ease: "easeOut", delay: 1.0 }}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <Image
              src="/images/wmiLogo.png"
              alt="WMI"
              width={20}
              height={20}
              className="w-5 h-5 rounded-full object-contain"
            />
            <span className="text-xs sm:text-sm font-sans font-medium text-neutral-text/70 group-hover:text-neutral-text/90">
              In partnership with WMI
            </span>
          </motion.a>
          <p
            className="text-neutral-text/60 text-sm sm:text-base md:text-lg lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-center hero-ghost-text"
            data-animate="subtitle-2"
          >
            {SUBTITLE_2}
          </p>
        </div>

        <div className="mt-6 sm:mt-8 w-full flex justify-center overflow-visible">
          <CurrentlyBackingWrapper />
        </div>
      </HeroContent>

      <HeroAnimations subtitle1={SUBTITLE_1} subtitle2={SUBTITLE_2} />

      <div
        className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ opacity: arrowOpacity }}
      >
        <span className="material-symbols-outlined text-white text-2xl sm:text-3xl font-light">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
