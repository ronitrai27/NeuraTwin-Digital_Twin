import Card from "@/components/Card";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import { LogoTicker } from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black scroll-smooth ">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Card />
      <Feature />
      <Information />
    </div>
  );
}
