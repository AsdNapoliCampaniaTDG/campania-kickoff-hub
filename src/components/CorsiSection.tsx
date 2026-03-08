import { useState } from "react";
import { Users, Trophy, Star, ChevronLeft } from "lucide-react";

const corsi = [
  {
    icon: Users,
    title: "Piccoli Amici",
    eta: "5-8 anni",
    categorie: ["2021", "2020", "2019", "2018"],
  },
  {
    icon: Star,
    title: "Pulcini & Esordienti",
    eta: "9-12 anni",
    categorie: ["2017", "2016", "2015", "2014"],
  },
  {
    icon: Trophy,
    title: "Giovanissimi & Allievi",
    eta: "13-15 anni",
    categorie: ["2013", "2012", "2011"],
  },
];

const CorsiSection = () => {
  const [selectedCorso, setSelectedCorso] = useState<number | null>(null);

  const handleCategoriaClick = (corsoTitle: string, anno: string) => {
    const categoria = `${corsoTitle} ${anno}`;
    const text = encodeURIComponent(`Salve, vorrei informazioni riguardo la categoria ${categoria}.`);
    const link = document.createElement("a");
    link.href = `https://wa.me/393394210699?text=${text}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <section id="corsi" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-5xl md:text-6xl text-center mb-4">I NOSTRI CORSI</h2>
        <p className="font-body text-foreground/70 text-center max-w-2xl mx-auto mb-14">
          Percorsi formativi per ogni fascia d'età, seguiti da staff tecnico certificato FIGC.
        </p>

        {selectedCorso === null ? (
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {corsi.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setSelectedCorso(i)}
                className="flex-1 max-w-sm bg-foreground/10 border border-foreground/20 rounded-lg p-8 text-center hover:bg-foreground/15 hover:border-accent transition cursor-pointer"
              >
                <c.icon className="mx-auto mb-4 text-accent" size={40} />
                <h3 className="font-display text-3xl mb-1">{c.title}</h3>
                <p className="font-body text-accent-foreground text-sm font-bold uppercase tracking-wider mb-3">{c.eta}</p>
                <p className="font-body text-foreground/50 text-xs mt-2">Clicca per scegliere la categoria</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            <button
              onClick={() => setSelectedCorso(null)}
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition mb-6 font-body"
            >
              <ChevronLeft size={18} />
              Torna ai corsi
            </button>
            <div className="bg-foreground/10 border border-foreground/20 rounded-lg p-8 text-center">
              {(() => {
                const c = corsi[selectedCorso];
                return (
                  <>
                    <c.icon className="mx-auto mb-4 text-accent" size={40} />
                    <h3 className="font-display text-3xl mb-1">{c.title}</h3>
                    <p className="font-body text-accent-foreground text-sm font-bold uppercase tracking-wider mb-6">{c.eta}</p>
                    <p className="font-body text-foreground/70 text-sm mb-4">Seleziona la categoria:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {c.categorie.map((anno) => (
                        <button
                          key={anno}
                          onClick={() => handleCategoriaClick(c.title, anno)}
                          className="bg-accent/20 hover:bg-accent/40 border border-accent/30 hover:border-accent text-foreground font-body font-bold py-3 px-4 rounded-lg transition text-lg"
                        >
                          {anno}
                        </button>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CorsiSection;
