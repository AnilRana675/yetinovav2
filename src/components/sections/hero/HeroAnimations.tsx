"use client";

import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(GSAPSplitText);

const GHOST_OPACITY = 0.05;

interface HeroAnimationsProps {
  subtitle1: string;
  subtitle2: string;
}

export function HeroAnimations({ subtitle1, subtitle2 }: HeroAnimationsProps) {
  const animatedRef = useRef(false);

  useEffect(() => {
    if (animatedRef.current) return;
    animatedRef.current = true;

    const animateElement = (selector: string, stagger: number, delay: number) => {
      const element = document.querySelector(selector);
      if (!element) return null;

      const split = new GSAPSplitText(element, {
        type: "words",
        wordsClass: "split-word",
      });

      gsap.fromTo(
        split.words,
        { opacity: GHOST_OPACITY },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: stagger / 1000,
          delay: delay / 1000,
        }
      );

      return split;
    };

    const animateShinyText = (selector: string, delay: number) => {
      const element = document.querySelector(selector);
      if (!element) return;

      gsap.fromTo(
        element,
        { opacity: GHOST_OPACITY, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          ease: "easeOut",
          delay: delay / 1000,
        }
      );
    };

    const splits: (GSAPSplitText | null)[] = [];

    const runAnimations = async () => {
      await document.fonts.ready;

      splits.push(animateElement('[data-animate="title-1"]', 50, 0));
      animateShinyText('[data-animate="title-2"]', 300);
      splits.push(animateElement('[data-animate="subtitle-1"]', 50, 800));
      splits.push(animateElement('[data-animate="subtitle-2"]', 50, 1200));

      document.querySelectorAll(".hero-ghost-text").forEach((el) => {
        el.classList.add("hydrated");
      });
    };

    runAnimations();

    return () => {
      splits.forEach((split) => {
        if (split) {
          try {
            split.revert();
          } catch {
            // Intentionally ignore errors during cleanup
            // GSAP SplitText may fail to revert if already cleaned up
          }
        }
      });
    };
  }, []); // Empty deps - effect should only run once on mount

  return null;
}
