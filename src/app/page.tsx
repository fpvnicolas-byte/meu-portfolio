import { HeroSection } from "@/components/sections/HeroSection";
import { BuildersOrigin } from "@/components/sections/BuildersOrigin";
import { TechStackDNA } from "@/components/sections/TechStackDNA";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Vision2026 } from "@/components/sections/Vision2026";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <BuildersOrigin />
      <TechStackDNA />
      <PortfolioGrid />
      <Vision2026 />
    </div>
  );
}
