import chiSiamoBg from "@/assets/chi-siamo-bg.jpg";

const ChiSiamoSection = () => (
  <section id="chi-siamo" className="relative py-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={chiSiamoBg} alt="Chi siamo" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-primary/80" />
    <div className="relative z-10 container mx-auto px-4">
      <h2 className="font-heading text-5xl md:text-6xl text-primary-foreground text-center mb-4">CHI SIAMO</h2>
      <p className="font-body text-primary-foreground/70 text-center max-w-2xl mx-auto mb-12">
        L'ASD Napoli Campania è una scuola calcio dedicata alla crescita sportiva e umana dei giovani atleti. Scopri la nostra storia attraverso immagini e video.
      </p>
    </div>
  </section>
);

export default ChiSiamoSection;
