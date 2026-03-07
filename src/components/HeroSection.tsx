import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import chiSiamoBg from "@/assets/chi-siamo-bg.jpg";
import contattiBg from "@/assets/contatti-bg.jpg";
import logo from "@/assets/logo.png";

const images = [heroBg, chiSiamoBg, contattiBg];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-primary pt-20 px-4">
      {/* Carousel card */}
      <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-10">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <img src={logo} alt="Logo" className="w-20 h-20 object-contain mb-4" />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-3">
            Scuola Calcio
          </p>
          <h1 className="font-club text-5xl md:text-6xl text-primary-foreground leading-none mb-1">
            NAPOLI
          </h1>
          <h2 className="font-club text-5xl md:text-6xl text-accent leading-none mb-3">
            CAMPANIA
          </h2>
          <p className="font-heading text-xl text-primary-foreground/90 uppercase tracking-wider mb-6">
            Il calcio è casa
          </p>
          <a
            href="#contatti"
            className="inline-block border-2 border-primary-foreground/60 text-primary-foreground font-body font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-primary-foreground/10 transition text-sm"
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
