const Services = () => {
  const services = [
    "News Reporting",
    "SEO Writing & Content Strategy",
    "Digital Journalism",
    "Voice-over & Presentation",
    "Broadcast Anchoring",
    "Copywriting & Blogging",
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-20 text-foreground">
          How we can work together
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center py-6 border-b border-border/60 hover:border-accent transition-colors duration-300 group cursor-default"
            >
              <h3 className="text-xl font-light text-foreground/80 group-hover:text-foreground transition-colors">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;