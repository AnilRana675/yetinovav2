"use client";

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

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] text-white mb-8 tracking-tight">
          We Back Nepal&apos;s
          <br />
          <span className="text-glow-purple">Boldest Builders.</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-neutral-text/80 font-light leading-relaxed max-w-3xl mx-auto">
          Funding. Mentorship. Network.
          <br />
          <span className="text-neutral-text/60">
            Bring your idea or MVP. We provide the capital and the playbook to
            turn your vision into Nepal&apos;s next big tech company.
          </span>
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-white text-3xl font-light">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
