import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChiSiamoSection from "@/components/ChiSiamoSection";

import InstagramSection from "@/components/InstagramSection";
import CorsiSection from "@/components/CorsiSection";
import SponsorSection from "@/components/SponsorSection";
import ContattiSection from "@/components/ContattiSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="font-body">
    <Navbar />
    <HeroSection />
    <ChiSiamoSection />
    <InstagramSection />
    <CorsiSection />
    <SponsorSection />
    <ContattiSection />
    <Footer />
  </div>
);

export default Index;
