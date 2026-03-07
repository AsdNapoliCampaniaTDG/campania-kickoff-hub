import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Scuola calcio" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-primary/75" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
        Scuola Calcio
      </p>
      <h1 className="font-club text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-none mb-2">
        NAPOLI
      </h1>
      <h2 className="font-club text-6xl md:text-8xl lg:text-9xl text-accent leading-none mb-4">
        CAMPANIA
      </h2>
      <p className="font-heading text-2xl md:text-3xl text-primary-foreground/90 uppercase tracking-wider mb-10">
        Il calcio è casa
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#chi-siamo" className="inline-block bg-accent text-accent-foreground font-body font-bold uppercase tracking-wider px-8 py-4 rounded-md hover:brightness-110 transition">
          Chi Siamo
        </a>
        <a href="#contatti" className="inline-block border-2 border-primary-foreground/40 text-primary-foreground font-body font-bold uppercase tracking-wider px-8 py-4 rounded-md hover:bg-primary-foreground/10 transition">
          Contattaci
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
