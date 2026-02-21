import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { ProjectFooter } from "@/components/layout/ProjectFooter";

export const metadata: Metadata = {
  title: "AgroConnect | AgroTech & Supply Chain | YetiNova",
  description:
    "AgroConnect is bridging the gap between rural farmers and urban markets to build a fairer, waste-free agricultural supply chain.",
  openGraph: {
    title: "AgroConnect | YetiNova Ventures",
    description:
      "Bridging the gap between rural farmers and urban markets to build a fairer, waste-free agricultural supply chain.",
    type: "website",
  },
};

export default function AgroConnectPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-text selection:bg-(--accent-color) selection:text-black">
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs sm:text-sm font-mono text-neutral-500 hover:text-(--accent-color) transition-colors mb-8 sm:mb-12"
          >
            ← Back to Projects
          </Link>

          <div className="mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-[#6589C9] mb-4 sm:mb-6">
              w25 | AgroConnect
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8">
              AgroTech & Supply Chain
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed">
              Bridging the gap between rural farmers and urban markets to build a fairer, waste-free
              agricultural supply chain.
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 mb-12 sm:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6589C9]/20 to-[#6B9EAA]/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-neutral-600 text-sm">Hero Image Placeholder</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-white mb-4 sm:mb-6">About</h2>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                AgroConnect is revolutionizing Nepal's agricultural sector by connecting rural
                farmers directly with urban markets. Their platform eliminates middlemen, reduces
                food waste, and ensures fair prices for both producers and consumers.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-white mb-4 sm:mb-6">
                Focus Areas
              </h2>
              <ul className="space-y-3">
                {[
                  "Farm-to-Market Connectivity",
                  "Supply Chain Optimization",
                  "Fair Price Discovery",
                  "Cold Chain Logistics",
                  "Digital Payment Solutions",
                ].map((focus) => (
                  <li
                    key={focus}
                    className="flex items-center text-sm sm:text-base text-neutral-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6589C9] mr-3" />
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 sm:pt-16">
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-6 sm:mb-8">Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Team Member 1", role: "Founder & CEO" },
                { name: "Team Member 2", role: "COO" },
                { name: "Team Member 3", role: "Head of Operations" },
              ].map((member) => (
                <div
                  key={member.name}
                  className="p-4 sm:p-6 rounded-xl bg-neutral-900/50 border border-white/5"
                >
                  <div className="w-16 h-16 rounded-full bg-neutral-800 mb-4" />
                  <p className="text-white font-medium">{member.name}</p>
                  <p className="text-neutral-500 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <ProjectFooter />
    </div>
  );
}
