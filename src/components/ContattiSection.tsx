import { MapPin, Phone, Mail } from "lucide-react";

const ContattiSection = () => (
  <section id="contatti" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-5xl md:text-6xl text-foreground text-center mb-4">CONTATTI</h2>
      <p className="font-body text-foreground/70 text-center max-w-2xl mx-auto mb-12">
        Vuoi iscrivere tuo figlio o saperne di più? Contattaci!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center gap-3">
          <MapPin className="text-accent" size={32} />
          <h3 className="font-display text-xl text-foreground">Sede</h3>
          <p className="font-body text-foreground/70 text-sm">Napoli, Campania</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <Phone className="text-accent" size={32} />
          <h3 className="font-display text-xl text-foreground">Telefono</h3>
          <p className="font-body text-foreground/70 text-sm">+39 0XX XXX XXXX</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <Mail className="text-accent" size={32} />
          <h3 className="font-display text-xl text-foreground">Email</h3>
          <p className="font-body text-foreground/70 text-sm">info@napolicampaniatdg.it</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContattiSection;
