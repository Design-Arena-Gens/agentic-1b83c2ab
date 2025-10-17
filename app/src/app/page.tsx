import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandTicker from "@/components/BrandTicker";
import FeatureHighlights from "@/components/FeatureHighlights";
import AssetLibrary from "@/components/AssetLibrary";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010205] text-white">
      <Navbar />
      <main>
        <Hero />
        <BrandTicker />
        <FeatureHighlights />
        <AssetLibrary />
        <Workflow />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
