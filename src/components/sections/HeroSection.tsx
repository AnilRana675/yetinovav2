"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy load Aurora WebGL component for better initial page load
const Aurora = dynamic(() => import("@/components/ui/aurora/Aurora"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 to-black" />
  ),
});

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32 overflow-hidden bg-black text-center">
      <div className="absolute inset-0 z-0">
        <Aurora amplitude={1.2} blend={0.5} speed={0.5} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-md mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
          <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-purple-100">
            Backing Next-Gen Innovators
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white mb-8 tracking-tight">
          Building{" "}
          <i className="font-serif text-glow-purple not-italic">Sustainable</i>
          <br />
          Digital Ventures
        </h1>

        <p className="text-lg md:text-xl text-neutral-text/70 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          We invest in people, ideas, and companies with the potential to change
          the world through AI-driven ecosystems.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="#"
            className="group relative px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium transition-all duration-300 border border-white/10 flex items-center gap-2"
          >
            Our Companies
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
          <Link
            href="#"
            className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white text-sm font-medium transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center gap-2"
          >
            Contact
            <span className="material-symbols-outlined text-sm">
              arrow_outward
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-white text-3xl font-light">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
