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
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
          How we can work together
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center py-8 border-t border-border hover:border-accent transition-colors"
            >
              <h3 className="text-lg font-medium">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;