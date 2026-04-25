import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import CaseStudy from "@/components/CaseStudy";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Products />
        <HowItWorks />
        <WhoItsFor />
        <CaseStudy />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
