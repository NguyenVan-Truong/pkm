import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnologyPlatform from "@/components/TechnologyPlatform";
import SustainabilityNetwork from "@/components/SustainabilityNetwork";
import PartnersCommunity from "@/components/PartnersCommunity";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TechnologyPlatform />
      <SustainabilityNetwork />
      <PartnersCommunity />
      <FinalCTA />
    </main>
  );
}
