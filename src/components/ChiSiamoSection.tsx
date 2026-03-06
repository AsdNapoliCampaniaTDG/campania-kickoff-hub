const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

const ChiSiamoSection = () => (
  <section id="chi-siamo" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-5xl md:text-6xl text-primary text-center mb-4">CHI SIAMO</h2>
      <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        L'ASD Napoli Campania TDG è una scuola calcio dedicata alla crescita sportiva e umana dei giovani atleti. Scopri la nostra storia attraverso immagini e video.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholders.map((n) => (
          <div
            key={n}
            className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border hover:border-accent transition-colors group cursor-pointer"
          >
            <span className="font-body text-muted-foreground group-hover:text-accent-foreground transition-colors text-lg font-semibold">
              📷 Foto / Video {n}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ChiSiamoSection;
