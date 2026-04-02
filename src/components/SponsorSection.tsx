import sponsorBanner from "@/assets/sponsor-banner.png";

const SponsorSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-12">SPONSOR</h2>
      <img
        src={sponsorBanner}
        alt="Sponsor"
        className="w-full object-contain"
        loading="lazy"
      />
    </div>
  </section>
);

export default SponsorSection;
