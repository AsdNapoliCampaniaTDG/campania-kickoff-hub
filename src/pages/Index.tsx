import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChiSiamoSection from "@/components/ChiSiamoSection";
import CorsiSection from "@/components/CorsiSection";
import ContattiSection from "@/components/ContattiSection";
import CarouselBackground from "@/components/CarouselBackground";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="font-body">
    <Navbar />
    <CarouselBackground>
      <HeroSection />
      <ChiSiamoSection />
      <ContattiSection />
    </CarouselBackground>
    <CorsiSection />
    <Footer />
  </div>
);

export default Index;
