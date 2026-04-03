import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { it } from "date-fns/locale";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const CentroSportivo = () => {
  const navigate = useNavigate();
  const [dateStr, setDateStr] = useState("");
  const [orario, setOrario] = useState("");
  const [modalita, setModalita] = useState("");

  const isComplete = dateStr && orario && modalita;

  const handleContinua = () => {
    if (!dateStr || !orario || !modalita) return;

    const date = new Date(dateStr + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDay = new Date(date);
    selectedDay.setHours(0, 0, 0, 0);

    const diffDays = Math.round((selectedDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const giornoSettimana = format(date, "EEEE", { locale: it });
    
    let giornoLabel: string;
    if (diffDays === 0) {
      giornoLabel = "oggi";
    } else if (diffDays === 1) {
      giornoLabel = "domani";
    } else if (diffDays >= 2 && diffDays <= 6) {
      giornoLabel = giornoSettimana;
    } else if (diffDays >= 7 && diffDays <= 13) {
      const todayDow = today.getDay();
      const selectedDow = selectedDay.getDay();
      giornoLabel = selectedDow >= todayDow ? `${giornoSettimana} prossimo` : giornoSettimana;
    } else {
      giornoLabel = `${giornoSettimana} ${format(date, "d MMMM", { locale: it })}`;
    }

    const modalitaText = modalita === "tutto" ? "tutto campo" : "metà campo";
    const text = `Salve, vorrei prenotare a ${modalitaText} per ${giornoLabel} alle ${orario}. `;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/393394210699?text=${encoded}`, "_blank");
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-[hsl(var(--centro-bg))] text-[hsl(var(--centro-foreground))] font-body">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/20">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="/" className="flex items-center gap-3 font-club text-2xl text-foreground tracking-wider">
            <img src={logo} alt="Logo ASD Napoli Campania" className="h-10 w-10 object-contain" />
            NAPOLI CAMPANIA
          </a>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-body text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide"
          >
            <ArrowLeft size={16} />
            Torna al sito
          </button>
        </div>
      </nav>

      {/* Hero image */}
      <section className="pt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-10">CENTRO SPORTIVO NAPOLI CAMPANIA</h1>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-16">
            <video
              src="/centro-sportivo.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Prenota */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-card text-card-foreground rounded-2xl shadow-xl p-8">
            <h2 className="font-heading text-3xl md:text-4xl text-center mb-8">PRENOTA</h2>

            <div className="space-y-6">
              {/* Giorno */}
              <div>
                <label className="block font-body text-sm font-semibold mb-2 uppercase tracking-wide">
                  Giorno
                </label>
                <input
                  type="date"
                  value={dateStr}
                  min={todayStr}
                  onChange={(e) => setDateStr(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              {/* Orario */}
              <div>
                <label className="block font-body text-sm font-semibold mb-2 uppercase tracking-wide">
                  Orario
                </label>
                <input
                  type="time"
                  value={orario}
                  onChange={(e) => setOrario(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              {/* Modalità campo */}
              <div>
                <label className="block font-body text-sm font-semibold mb-2 uppercase tracking-wide">
                  Modalità campo
                </label>
                <select
                  value={modalita}
                  onChange={(e) => setModalita(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled>Seleziona modalità</option>
                  <option value="tutto">Tutto campo</option>
                  <option value="meta">Metà campo</option>
                </select>
              </div>

              {/* Continua */}
              <Button
                onClick={handleContinua}
                disabled={!isComplete}
                className="w-full bg-[hsl(var(--centro-foreground))] text-[hsl(var(--centro-bg))] hover:opacity-90 font-heading text-lg tracking-wider py-6"
              >
                CONTINUA
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CentroSportivo;
