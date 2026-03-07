import { useState, useEffect, type ReactNode } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import chiSiamoBg from "@/assets/chi-siamo-bg.jpg";
import contattiBg from "@/assets/contatti-bg.jpg";

const images = [heroBg, chiSiamoBg, contattiBg];

interface Props {
  children: ReactNode;
}

const CarouselBackground = ({ children }: Props) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Carousel images */}
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CarouselBackground;
