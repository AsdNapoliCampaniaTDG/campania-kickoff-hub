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
      <div className="flex items-center justify-center gap-4 md:gap-12 mx-auto flex-wrap">
        {sponsors.map((s) => (
          <div key={s.alt} className="bg-background rounded-lg flex-1 min-w-0 flex items-center justify-center">
            <img
              src={s.src}
              alt={s.alt}
              className="w-full max-h-40 md:max-h-72 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorSection;
