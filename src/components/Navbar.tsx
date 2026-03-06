import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Corsi", href: "#corsi" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="font-club text-2xl text-primary-foreground tracking-wider">
          ASD NAPOLI CAMPANIA T.D.G.
        </a>
        <div className="hidden md:flex gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20 px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-body text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground uppercase tracking-wide"
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
