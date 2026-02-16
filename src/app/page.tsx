import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { VenturesSection } from "@/components/sections/VenturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-text selection:bg-purple-500 selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <VenturesSection />
      </main>
      <Footer />
    </div>
  );
}
