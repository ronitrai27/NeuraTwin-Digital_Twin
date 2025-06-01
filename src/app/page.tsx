import Card from "@/components/Card";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import { VortexDemoSecond } from "@/components/VortexSection";
export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black ">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Card />
      <Feature />
      <PricingSection />
      <VortexDemoSecond />
    </div>
  );
}
