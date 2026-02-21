import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const VENTURES = [
  {
    id: "w26-astrayug",
    slug: "astrayug",
    name: "AstraYug",
    initials: "AY",
    category: "Digital Agency & Infrastructure",
    description:
      "Building scalable digital ecosystems and global-standard brand experiences for high-growth companies.",
    accentColor: "rgba(124, 58, 237, 0.3)",
    year: "2026",
    status: "Active",
  },
  {
    id: "w25-agroconnect",
    slug: "agroconnect",
    name: "AgroConnect",
    initials: "AC",
    category: "AgroTech & Supply Chain",
    description:
      "Bridging the gap between rural farmers and urban markets to build a fairer, waste-free agricultural supply chain.",
    accentColor: "rgba(74, 222, 128, 0.2)",
    year: "2025",
    status: "Active",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-text selection:bg-(--accent-color) selection:text-black">
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="mb-16 sm:mb-24">
            <p className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-(--accent-color) mb-4 sm:mb-6">
              Projects
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8">
              The Future, Built in the Himalayas.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed">
              We don't just fund ideas; we back the grit required to turn raw concepts into
              global-grade market leaders. Explore the ventures shaping Nepal's digital tomorrow.
            </p>
          </div>

          <div className="mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-(--accent-color) mb-2 sm:mb-3">
              Currently Backing
            </p>
            <p className="text-sm sm:text-base text-neutral-500 font-light">
              The boldest builders in our ecosystem—solving hard problems and scaling rapidly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {VENTURES.map((venture) => (
              <Link
                key={venture.id}
                href={`/projects/${venture.slug}`}
                className="group block relative bg-neutral-900/50 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/15 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white font-semibold text-sm sm:text-base"
                    style={{ backgroundColor: venture.accentColor }}
                  >
                    {venture.initials}
                  </div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    {venture.year}
                  </span>
                </div>

                <h2 className="font-serif text-xl sm:text-2xl text-white mb-2 group-hover:text-(--accent-color) transition-colors duration-300">
                  {venture.name}
                </h2>

                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-(--accent-color) mb-4">
                  {venture.category}
                </p>

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-6">
                  {venture.description}
                </p>

                <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-mono text-(--accent-color) uppercase tracking-wider">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
