import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Centro Sportivo", href: "/centro-sportivo", internal: true },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Corsi", href: "#corsi" },
  { label: "Contatti", href: "#contatti" },
  { label: "Partite", href: "https://napolicampania-play-hub.lovable.app", external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3 font-club text-2xl text-foreground tracking-wider">
          <img src={logo} alt="Logo ASD Napoli Campania" className="h-10 w-10 object-contain" />
          ASD NAPOLI CAMPANIA
        </a>
        <div className="hidden md:flex gap-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-body text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-foreground/20 px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setOpen(false)}
              className="block py-2 font-body text-sm font-semibold text-foreground/80 hover:text-foreground uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
