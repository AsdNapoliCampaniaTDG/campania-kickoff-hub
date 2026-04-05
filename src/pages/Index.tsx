import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChiSiamoSection from "@/components/ChiSiamoSection";

import CorsiSection from "@/components/CorsiSection";
import ScuolaCalcioAdultiSection from "@/components/ScuolaCalcioAdultiSection";
import InstagramSection from "@/components/InstagramSection";
import SponsorSection from "@/components/SponsorSection";
import ContattiSection from "@/components/ContattiSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="font-body">
    <Navbar />
    <HeroSection />
    <ChiSiamoSection />
    <CorsiSection />
    <ScuolaCalcioAdultiSection />
    <InstagramSection />
    <SponsorSection />
    <ContattiSection />
    <Footer />
  </div>
);

export default Index;
