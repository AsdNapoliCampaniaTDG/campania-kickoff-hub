import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramSection = () => (
  <section className="py-20 bg-[hsl(var(--background))] text-[hsl(var(--instagram-foreground))]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-5xl md:text-6xl mb-8">SEGUICI SU INSTAGRAM</h2>
      <Instagram className="mx-auto mb-8" size={64} />
      <a
        href="https://www.instagram.com/asd_napoli_campania_tdg?igsh=MXBseGlsd3hmbDF1Yg=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="bg-[hsl(var(--instagram-foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--instagram-foreground)/0.85)] text-lg px-8 py-6"
        >
          Vai al Profilo
        </Button>
      </a>
    </div>
  </section>
);

export default InstagramSection;
