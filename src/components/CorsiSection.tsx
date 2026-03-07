import { Users, Trophy, Star } from "lucide-react";

const corsi = [
  { icon: Users, title: "Piccoli Amici", eta: "5-8 anni" },
  { icon: Star, title: "Pulcini & Esordienti", eta: "9-12 anni" },
  { icon: Trophy, title: "Giovanissimi & Allievi", eta: "13-17 anni" },
];

const CorsiSection = () => (
  <section id="corsi" className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-5xl md:text-6xl text-center mb-4">I NOSTRI CORSI</h2>
      <p className="font-body text-primary-foreground/70 text-center max-w-2xl mx-auto mb-14">
        Percorsi formativi per ogni fascia d'età, seguiti da staff tecnico certificato FIGC.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {corsi.map((c) => (
          <div key={c.title} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-8 text-center hover:bg-primary-foreground/15 transition">
            <c.icon className="mx-auto mb-4 text-accent" size={40} />
            <h3 className="font-display text-3xl mb-1">{c.title}</h3>
            <p className="font-body text-accent text-sm font-bold uppercase tracking-wider mb-3">{c.eta}</p>
            
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CorsiSection;
