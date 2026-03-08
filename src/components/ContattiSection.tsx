import { MapPin, Phone, Mail } from "lucide-react";

const ContattiSection = () => (
  <section id="contatti" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-5xl md:text-6xl text-foreground text-center mb-12">CONTATTI</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center gap-3">
          <MapPin className="text-accent" size={32} />
          <h3 className="font-display text-xl text-foreground">Sede</h3>
          <p className="font-body text-foreground/70 text-sm">Campo Campania, Traversa Viale Campania 12, Torre del Greco (NA) 80059</p>
          <a
            href="https://maps.app.goo.gl/jWqgbYguhCABmJWD7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block bg-accent text-accent-foreground font-heading text-xs px-4 py-1.5 rounded hover:bg-accent/80 transition-colors"
          >
            APRI IN MAPS
          </a>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <Phone className="text-accent" size={32} />
          <h3 className="font-display text-xl text-foreground">Telefono</h3>
          <p className="font-body text-foreground/70 text-sm">+39 339 421 0699</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <Mail className="text-accent" size={32} />
          <h3 className="font-display text-xl text-foreground">Email</h3>
          <p className="font-body text-foreground/70 text-sm">napolicampaniatdg@libero.it</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContattiSection;
