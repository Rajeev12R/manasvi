const ClientLogos = () => {
  const clients = [
    { name: "Shekunj Foundation", link: "https://www.shekunj.com/" },
    { name: "The Journalist", link: "https://www.thejournalist.org.za/" },
    { name: "OctaHire", link: "https://www.octahire.com/" },
    { name: "94.3 MY FM", link: "https://myfmindia.com/" },
    { name: "Lit chowk", link: "https://litchowk.com/" },
    { name: "The Publicat", link: "https://thepublicat.com/" },
  ];

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Replace with the actual path to your resume file
    const resumeUrl = "/resume-manasvi-rathore.pdf";
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Manasvi-Rathore-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-foreground/30"></div>
            <span className="mx-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Featured In
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-foreground/30"></div>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-2xl mx-auto">
            Featured in <span className="text-primary">50+</span> projects exploring voices,
            ideas and real impact
          </h3>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Proud to have worked with leading companies and organizations to bring powerful stories to life
          </p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clients.map((client, index) => (
            <a
            key={index}
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
              
            >

              <div
                key={index}
                className="group relative flex items-center justify-center p-6 sm:p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-card/70"
              >
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-background via-card to-background opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Client Name with Enhanced Typography */}
                <div className="relative z-10 text-center">
                  <span className="text-base sm:text-lg font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300 tracking-wide">
                    {client.name}
                  </span>
                </div>

                {/* Experience Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
          </a>
          ))}
        </div>

        {/* Professional Experience Stats */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-primary">50+</div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-primary">{clients.length}+</div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Companies Worked With</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-primary">100+</div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Stories Produced</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-primary">∞</div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Audience Reach</div>
          </div>
        </div>

        {/* Professional CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            Looking for a professional to hire? I am ready
          </p>
          <button onClick={handleResumeDownload} className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 group">
            View Resume
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;