import sponsorCoraltour from "@/assets/sponsor-coraltour.png";
import sponsorCobegas from "@/assets/sponsor-cobegas-transparent.png";
import sponsorCoraltorre from "@/assets/sponsor-coraltorre.png";

const sponsors = [
  { src: sponsorCoraltour, alt: "Coraltour Viaggi & Turismo" },
  { src: sponsorCobegas, alt: "Cobegas" },
  { src: sponsorCoraltorre, alt: "Coraltorre Viaggi & Turismo" },
];

const SponsorSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-12">SPONSOR</h2>
      <div className="flex items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
        {sponsors.map((s) => (
          <div key={s.alt} className="bg-background rounded-lg p-4">
            <img
              src={s.src}
              alt={s.alt}
              className="h-16 md:h-28 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorSection;
