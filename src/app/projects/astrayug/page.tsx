import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function AstraYugPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-text selection:bg-(--accent-color) selection:text-black">
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs sm:text-sm font-mono text-neutral-500 hover:text-(--accent-color) transition-colors mb-8 sm:mb-12"
          >
            &larr; Back to Projects
          </Link>

          <div className="mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-(--accent-color) mb-4 sm:mb-6">
              w26 | AstraYug
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8">
              Digital Agency & Infrastructure
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed">
              Building scalable digital ecosystems and global-standard brand experiences for
              high-growth companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-white mb-4 sm:mb-6">About</h2>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                AstraYug is a digital agency focused on building scalable digital ecosystems and
                delivering global-standard brand experiences for high-growth companies. Based in the
                Himalayas, they combine local talent with international best practices to create
                world-class digital products.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-white mb-4 sm:mb-6">
                Focus Areas
              </h2>
              <ul className="space-y-3">
                {[
                  "Digital Product Development",
                  "Brand Identity & Design",
                  "Cloud Infrastructure",
                  "Scalable Web Applications",
                  "Enterprise Solutions",
                ].map((focus) => (
                  <li
                    key={focus}
                    className="flex items-center text-sm sm:text-base text-neutral-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-(--accent-color) mr-3" />
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
