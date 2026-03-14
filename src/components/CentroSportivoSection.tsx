import centroImg from "@/assets/centro-sportivo.jpg";

const CentroSportivoSection = () => (
  <section className="py-20 bg-[hsl(var(--centro-bg))] text-[hsl(var(--centro-foreground))]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-5xl md:text-6xl mb-4">CENTRO SPORTIVO</h2>
      <p className="font-body text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-12">
        Ci troviamo al Centro Sportivo Napoli Campania, la nostra casa da sempre.
      </p>
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={centroImg}
          alt="Vista aerea del Centro Sportivo Napoli Campania a Torre del Greco"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default CentroSportivoSection;
