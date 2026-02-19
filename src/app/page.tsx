import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ChairmanSection } from "@/components/sections/ChairmanSection";
import { GovernanceSection } from "@/components/sections/GovernanceSection";
import { HeroSection } from "@/components/sections/hero";
import { JoinSection } from "@/components/sections/JoinSection";
import { ModelAboutSection } from "@/components/sections/ModelAboutSection";
import { PartnershipsSection } from "@/components/sections/PartnershipsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-text selection:bg-[#606FCC] selection:text-black">
      <Header />
      <main>
        <HeroSection />
        <ModelAboutSection />
        <ChairmanSection />
        <PartnershipsSection />
        <JoinSection />
        <GovernanceSection />
      </main>
      <Footer />
    </div>
  );
}
