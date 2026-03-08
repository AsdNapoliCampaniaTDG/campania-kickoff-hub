import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import heroPattern from "@/assets/hero-pattern.png";
import c1 from "@/assets/carousel-1.jpeg";
import c2 from "@/assets/carousel-2.jpeg";
import c3 from "@/assets/carousel-3.jpeg";
import c4 from "@/assets/carousel-4.jpeg";
import c5 from "@/assets/carousel-5.jpeg";
import c6 from "@/assets/carousel-6.jpeg";
import c7 from "@/assets/carousel-7.jpeg";
import c8 from "@/assets/carousel-8.jpeg";

const groups = [
  [c1, c2, c3, c4],
  [c5, c6, c7, c8],
];

const allImages = [...groups[0], ...groups[1]];

const HeroSection = () => {
  const [groupIndex, setGroupIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % groups.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % allImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentGroup = groups[groupIndex];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Desktop background pattern */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPattern})` }}
      />
      {/* Mobile: single image carousel */}
      <div className="md:hidden relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-10">
        {allImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Napoli Campania"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === mobileIndex ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-[hsl(210,100%,15%)]/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <img src={logo} alt="Logo" className="w-20 h-20 object-contain mb-4" />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/80 mb-3">Scuola Calcio</p>
          <h1 className="font-club text-5xl text-white leading-none mb-1">NAPOLI</h1>
          <h2 className="font-club text-5xl text-white/80 leading-none mb-3">CAMPANIA</h2>
          <p className="font-heading text-xl text-white/90 uppercase tracking-wider mb-6">Il calcio è casa</p>
          <a href="#contatti" className="inline-block border-2 border-white/60 text-white font-body font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-white/10 transition text-sm">
            Contattaci
          </a>
        </div>
      </div>

      {/* Desktop: 4 photos in a row */}
      <div className="hidden md:block relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl mb-10">
        <div className="grid grid-cols-4 grid-rows-2 aspect-[2/1]">
          {allImages.map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={src} alt="Napoli Campania" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[hsl(210,100%,15%)]/50" />
        <div className="relative z-10 absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <img src={logo} alt="Logo" className="w-24 h-24 object-contain mb-4" />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/80 mb-3">Scuola Calcio</p>
          <h1 className="font-club text-6xl lg:text-7xl text-white leading-none mb-1">NAPOLI</h1>
          <h2 className="font-club text-6xl lg:text-7xl text-white/80 leading-none mb-3">CAMPANIA</h2>
          <p className="font-heading text-2xl text-white/90 uppercase tracking-wider mb-6">Il calcio è casa</p>
          <a href="#contatti" className="inline-block border-2 border-white/60 text-white font-body font-bold uppercase tracking-wider px-8 py-3 rounded-full hover:bg-white/10 transition">
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
