import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BatchesSection } from "@/components/sections/BatchesSection";
import { ModelSection } from "@/components/sections/ModelSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PartnershipsSection } from "@/components/sections/PartnershipsSection";
import { JoinSection } from "@/components/sections/JoinSection";
import { GovernanceSection } from "@/components/sections/GovernanceSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-text selection:bg-[#606FCC] selection:text-black">
      <Header />
      <main>
        <HeroSection />
        <BatchesSection />
        <ModelSection />
        <AboutSection />
        <PartnershipsSection />
        <JoinSection />
        <GovernanceSection />
      </main>
      <Footer />
    </div>
  );
}
