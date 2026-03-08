import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import chiSiamoBg from "@/assets/chi-siamo-bg.jpg";
import contattiBg from "@/assets/contatti-bg.jpg";
import logo from "@/assets/logo.png";

// 8 slots — replace with real photos later
const allImages = [
  heroBg, chiSiamoBg, contattiBg, heroBg,
  chiSiamoBg, contattiBg, heroBg, chiSiamoBg,
];

const groups = [allImages.slice(0, 4), allImages.slice(4, 8)];

const HeroSection = () => {
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % groups.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentGroup = groups[groupIndex];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-background pt-20 px-4">
      {/* Mobile: single card carousel */}
      <div className="md:hidden relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-10">
        {allImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: Math.floor(i / 4) === groupIndex && i % 4 === 0 ? 1 : 0 }}
          />
        ))}
        {/* Show first image of current group */}
        {groups.map((group, gi) => (
          <img
            key={`mobile-${gi}`}
            src={group[0]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: gi === groupIndex ? 1 : 0 }}
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

      {/* Desktop: 4 photos in a row + text overlay */}
      <div className="hidden md:block relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl mb-10">
        <div className="grid grid-cols-4 aspect-[4/1.2]">
          {currentGroup.map((src, i) => (
            <div key={`${groupIndex}-${i}`} className="relative overflow-hidden animate-fade-in">
              <img src={src} alt="" className="w-full h-full object-cover" />
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
