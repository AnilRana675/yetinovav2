import Link from "next/link";
import Image from "next/image";

export function VenturesSection() {
  return (
    <section className="relative bg-black py-32 px-8 md:px-16 lg:px-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-3 block">
              Our Portfolio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Active Cohort
            </h2>
          </div>
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-full bg-surface-dark text-white border border-purple-500/30 font-medium text-sm transition-all hover:bg-purple-600 hover:border-purple-600 hover:text-white whitespace-nowrap">
                All Ventures
              </button>
              <button className="px-6 py-3 rounded-full border border-white/10 bg-transparent hover:border-purple-500/50 text-neutral-text font-light text-sm transition-all whitespace-nowrap">
                Applied AI
              </button>
              <button className="px-6 py-3 rounded-full border border-white/10 bg-transparent hover:border-purple-500/50 text-neutral-text font-light text-sm transition-all whitespace-nowrap">
                Green Tech
              </button>
              <button className="px-6 py-3 rounded-full border border-white/10 bg-transparent hover:border-purple-500/50 text-neutral-text font-light text-sm transition-all whitespace-nowrap">
                Supply Chain
              </button>
              <button className="px-6 py-3 rounded-full border border-white/10 bg-transparent hover:border-purple-500/50 text-neutral-text font-light text-sm transition-all whitespace-nowrap">
                FinTech
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Card 1: AgroConnect */}
          <div className="group relative flex flex-col">
            <div className="relative w-full aspect-4/3 rounded-[2rem] overflow-hidden mb-8 border border-white/5">
              <Image
                src="/images/agroconnect.jpg"
                alt="Drone flying over agricultural fields with data overlays"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium tracking-wide border border-white/10">
                  Scaling Series A
                </span>
              </div>
            </div>
            <div className="pr-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-purple-400 text-xs uppercase tracking-widest mb-2 block">
                    AgriTech / AI
                  </span>
                  <h3 className="font-serif text-3xl text-white mb-3 group-hover:text-purple-400 transition-colors">
                    AgroConnect
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300">
                  <span className="material-symbols-outlined text-white text-sm">
                    arrow_outward
                  </span>
                </div>
              </div>
              <p className="text-neutral-text-muted font-light leading-relaxed mb-6">
                AI-driven crop yield optimization and supply chain transparency
                for emerging agricultural markets. Revolutionizing how we feed
                the world.
              </p>
            </div>
          </div>

          {/* Card 2: AstraYug */}
          <div className="group relative flex flex-col md:mt-24">
            <div className="relative w-full aspect-4/3 rounded-[2rem] overflow-hidden mb-8 border border-white/5">
              <Image
                src="/images/astrayug.jpg"
                alt="Abstract view of earth from space with data network lines"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-black text-xs font-medium tracking-wide">
                  Incubating
                </span>
              </div>
            </div>
            <div className="pr-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-purple-400 text-xs uppercase tracking-widest mb-2 block">
                    SpaceTech / Climate
                  </span>
                  <h3 className="font-serif text-3xl text-white mb-3 group-hover:text-purple-400 transition-colors">
                    AstraYug
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300">
                  <span className="material-symbols-outlined text-white text-sm">
                    arrow_outward
                  </span>
                </div>
              </div>
              <p className="text-neutral-text-muted font-light leading-relaxed mb-6">
                Next-generation satellite imagery analysis engine for climate
                resilience modeling and disaster prediction. Protecting our
                future from above.
              </p>
            </div>
          </div>

          {/* Card 3: Ecosystem CTA */}
          <div className="group relative flex flex-col justify-center items-center text-center p-12 min-h-[500px] rounded-[2rem] border border-white/10 bg-surface-dark/20 hover:bg-surface-dark/40 transition-all duration-500">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/5">
              <span className="material-symbols-outlined text-neutral-text/50 text-3xl font-light">
                hub
              </span>
            </div>
            <h3 className="font-serif text-3xl text-white mb-4">
              Join the Ecosystem
            </h3>
            <p className="text-neutral-text-muted font-light text-sm max-w-xs mx-auto mb-8 leading-relaxed">
              Are you building the future of sustainable tech? Apply for our
              next cohort of visionaries.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-purple-400 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors"
            >
              Apply Now
              <span className="material-symbols-outlined ml-2 text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Card 4: Impact Metrics */}
          <div className="group relative rounded-[2rem] overflow-hidden transition-all duration-500 bg-[#0a0a0a] md:mt-24 p-10 flex flex-col justify-between border border-white/5 min-h-[500px]">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div>
              <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-4 block">
                2030 Vision
              </span>
              <h3 className="font-serif text-3xl text-white mb-4">
                Impact Metrics
              </h3>
              <p className="text-neutral-text/70 font-light leading-relaxed max-w-sm">
                The projected combined impact of YetiNova ventures by the end of
                the decade.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/5 pt-8">
              <div>
                <span className="block font-serif text-4xl text-purple-400 mb-2">
                  1.2M
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-text-muted">
                  Tonnes CO2e
                </span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-purple-400 mb-2">
                  50+
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-text-muted">
                  Global Patents
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
