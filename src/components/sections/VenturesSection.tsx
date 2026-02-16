import Link from "next/link";
import { VentureCard } from "./VentureCard";

const FILTER_BUTTONS = [
  { label: "All Ventures", active: true },
  { label: "Applied AI", active: false },
  { label: "Green Tech", active: false },
  { label: "Supply Chain", active: false },
  { label: "FinTech", active: false },
];

const VENTURES = [
  {
    image: "/images/agroconnect.jpg",
    imageAlt: "Drone flying over agricultural fields with data overlays",
    category: "AgriTech / AI",
    title: "AgroConnect",
    description:
      "AI-driven crop yield optimization and supply chain transparency for emerging agricultural markets. Revolutionizing how we feed the world.",
    badge: "Scaling Series A",
    badgeStyle: "dark" as const,
    offsetTop: false,
  },
  {
    image: "/images/astrayug.jpg",
    imageAlt: "Abstract view of earth from space with data network lines",
    category: "SpaceTech / Climate",
    title: "AstraYug",
    description:
      "Next-generation satellite imagery analysis engine for climate resilience modeling and disaster prediction. Protecting our future from above.",
    badge: "Incubating",
    badgeStyle: "light" as const,
    offsetTop: true,
  },
];

const IMPACT_METRICS = [
  { value: "1.2M", label: "Tonnes CO2e" },
  { value: "50+", label: "Global Patents" },
];

export function VenturesSection() {
  return (
    <section className="relative bg-black py-32 px-8 md:px-16 lg:px-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              {FILTER_BUTTONS.map((btn) => (
                <button
                  key={btn.label}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all whitespace-nowrap ${
                    btn.active
                      ? "bg-surface-dark text-white border border-purple-500/30 hover:bg-purple-600 hover:border-purple-600"
                      : "border border-white/10 bg-transparent hover:border-purple-500/50 text-neutral-text font-light"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Venture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {VENTURES.map((venture) => (
            <VentureCard key={venture.title} {...venture} />
          ))}

          {/* Ecosystem CTA Card */}
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

          {/* Impact Metrics Card */}
          <div className="group relative rounded-[2rem] overflow-hidden transition-all duration-500 bg-[#0a0a0a] md:mt-24 p-10 flex flex-col justify-between border border-white/5 min-h-[500px]">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
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
              {IMPACT_METRICS.map((metric) => (
                <div key={metric.label}>
                  <span className="block font-serif text-4xl text-purple-400 mb-2">
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-neutral-text-muted">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
