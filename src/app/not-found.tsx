import Link from "next/link";
import { Header } from "@/components/layout/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-neutral-text selection:bg-(--accent-color) selection:text-black">
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 text-center">
          <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl text-white mb-4 sm:mb-6">
            404
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-400 font-light mb-8 max-w-lg mx-auto">
            This page is still being built. Check back soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm uppercase tracking-widest text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Go Home
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center text-sm uppercase tracking-widest text-white bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
