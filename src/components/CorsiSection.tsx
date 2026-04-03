import { useState, useRef } from "react";
import { ChevronLeft } from "lucide-react";

const categoryLinks: Record<string, string> = {
  "2022": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2022&type=phone_number&app_absent=0",
  "2021": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2021&type=phone_number&app_absent=0",
  "2020": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2020&type=phone_number&app_absent=0",
  "2019": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2019&type=phone_number&app_absent=0",
  "2018": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2018&type=phone_number&app_absent=0",
  "2017": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2017&type=phone_number&app_absent=0",
  "2016": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2016&type=phone_number&app_absent=0",
  "2015": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2015&type=phone_number&app_absent=0",
  "2014": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2014&type=phone_number&app_absent=0",
  "2013": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2013&type=phone_number&app_absent=0",
  "2012": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2012&type=phone_number&app_absent=0",
  "2011": "https://api.whatsapp.com/send/?phone=393394210699&text=Salve%2C+vorrei+informazioni+riguardo+la+categoria+2011&type=phone_number&app_absent=0",
};

const corsi = [
  {
    icon: Users,
    title: "Piccoli Amici",
    eta: "4-7 anni",
    categorie: ["2019", "2020", "2021", "2022"],
  },
  {
    icon: Footprints,
    title: "Primi Calci",
    eta: "8-9 anni",
    categorie: ["2017", "2018"],
  },
  {
    icon: Star,
    title: "Pulcini",
    eta: "10-11 anni",
    categorie: ["2015", "2016"],
  },
  {
    icon: Trophy,
    title: "Esordienti",
    eta: "12-13 anni",
    categorie: ["2013", "2014"],
  },
  {
    icon: Shield,
    title: "Under 14",
    eta: "14 anni",
    categorie: ["2012"],
  },
  {
    icon: Shield,
    title: "Under 15",
    eta: "15 anni",
    categorie: ["2011"],
  },
];

const CorsiSection = () => {
  const [selectedCorso, setSelectedCorso] = useState<number | null>(null);

  return (
    <section id="corsi" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-5xl md:text-6xl text-center mb-4">I NOSTRI CORSI</h2>
        <p className="font-body text-foreground/70 text-center max-w-2xl mx-auto mb-4">
          Percorsi formativi per ogni fascia d'età, seguiti da staff tecnico certificato FIGC.
        </p>
        <p className="font-heading text-2xl md:text-3xl text-center mb-14">
          SELEZIONA LA TUA CATEGORIA
        </p>

        {selectedCorso === null ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {corsi.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setSelectedCorso(i)}
                className="bg-foreground/10 border border-foreground/20 rounded-lg p-8 text-center hover:bg-foreground/15 hover:border-accent transition cursor-pointer"
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
                          onClick={() => window.open(categoryLinks[anno], "_blank")}
                          className="bg-accent/20 hover:bg-accent/40 border border-accent/30 hover:border-accent text-foreground font-body font-bold py-3 px-4 rounded-lg transition text-lg text-center cursor-pointer"
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
