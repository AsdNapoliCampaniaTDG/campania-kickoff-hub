const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy opacity-90" />
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, hsl(45 100% 50% / 0.3) 0%, transparent 60%)' }} />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
        Scuola Calcio
      </p>
      <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-none mb-2">
        NAPOLI
      </h1>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-accent leading-none mb-8">
        CAMPANIA
      </h2>
      <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
        Passione, disciplina e talento. La tua scuola calcio nel cuore della Campania.
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
