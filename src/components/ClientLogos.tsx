const ClientLogos = () => {
  const clients = [
    "The Publicat",
    "The Journalist",
    "Shekunj Foundation",
    "OctaHire",
    "94.3 MY FM",
    "Lit chowk"
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-center font-serif text-2xl mb-12">
          50+ projects exploring voices, ideas, and real impact
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-sm hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-center text-muted-foreground">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
