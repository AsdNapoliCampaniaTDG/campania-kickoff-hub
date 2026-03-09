import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChiSiamoSection from "@/components/ChiSiamoSection";
import CentroSportivoSection from "@/components/CentroSportivoSection";
import InstagramSection from "@/components/InstagramSection";
import CorsiSection from "@/components/CorsiSection";
import ContattiSection from "@/components/ContattiSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="font-body">
    <Navbar />
    <HeroSection />
    <ChiSiamoSection />
    <CentroSportivoSection />
    <CorsiSection />
    <ContattiSection />
    <Footer />
  </div>
);

export default Index;
