const CentroSportivoSection = () => (
  <section className="py-20 bg-[hsl(var(--centro-bg))] text-[hsl(var(--centro-foreground))]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-5xl md:text-6xl mb-12">CENTRO SPORTIVO NAPOLI CAMPANIA</h2>
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
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
);

export default CentroSportivoSection;
