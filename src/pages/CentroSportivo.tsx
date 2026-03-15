import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import centroImg from "@/assets/centro-sportivo.jpg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const orari = [
  "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00", "22:00",
];

const CentroSportivo = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [orario, setOrario] = useState("");
  const [modalita, setModalita] = useState("");

  const isComplete = date && orario && modalita;

  const handleContinua = () => {
    if (!date || !orario || !modalita) return;

    const giornoFormatted = format(date, "d MMMM yyyy", { locale: it });
    const modalitaText = modalita === "tutto" ? "tutto campo" : "metà campo";
    const text = `Salve, vorrei prenotare a ${modalitaText} per ${giornoFormatted} alle ${orario}. `;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/393394210699?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--centro-bg))] text-[hsl(var(--centro-foreground))] font-body">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/20">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="/" className="flex items-center gap-3 font-club text-2xl text-foreground tracking-wider">
            <img src={logo} alt="Logo ASD Napoli Campania" className="h-10 w-10 object-contain" />
            ASD NAPOLI CAMPANIA
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
          <h1 className="font-heading text-5xl md:text-6xl mb-4">CENTRO SPORTIVO</h1>
          <p className="font-body text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-10">
            Ci troviamo al Centro Sportivo Napoli Campania, la nostra casa da sempre.
          </p>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-16">
            <img
              src={centroImg}
              alt="Vista aerea del Centro Sportivo Napoli Campania a Torre del Greco"
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "d MMMM yyyy", { locale: it }) : "Seleziona un giorno"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Orario */}
              <div>
                <label className="block font-body text-sm font-semibold mb-2 uppercase tracking-wide">
                  Orario
                </label>
                <Select value={orario} onValueChange={setOrario}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleziona un orario" />
                  </SelectTrigger>
                  <SelectContent>
                    {orari.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Modalità campo */}
              <div>
                <label className="block font-body text-sm font-semibold mb-2 uppercase tracking-wide">
                  Modalità campo
                </label>
                <Select value={modalita} onValueChange={setModalita}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleziona modalità" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tutto">Tutto campo</SelectItem>
                    <SelectItem value="meta">Metà campo</SelectItem>
                  </SelectContent>
                </Select>
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
