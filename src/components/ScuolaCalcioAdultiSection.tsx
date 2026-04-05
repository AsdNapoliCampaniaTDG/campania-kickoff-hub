import { Button } from "@/components/ui/button";

const ScuolaCalcioAdultiSection = () => (
  <section className="py-20 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-5xl md:text-6xl mb-6">SCUOLA CALCIO ADULTI</h2>
      <p className="font-body text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-10">
        Vuoi tornare a giocare a calcio? La nostra scuola calcio adulti è aperta a tutti!
      </p>
      <a
        href="https://wa.me/393394210699?text=Salve,%20vorrei%20informazioni%20sulla%20scuola%20calcio%20adulti."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="bg-[hsl(var(--primary-foreground))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-foreground)/0.85)] text-lg px-8 py-6"
        >
          Chiedi Informazioni
        </Button>
      </a>
    </div>
  </section>
);

export default ScuolaCalcioAdultiSection;
