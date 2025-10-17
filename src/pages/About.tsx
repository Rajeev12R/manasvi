import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import kelseyportrait from "@/assets/kelsey-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
                About Manasvi
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Journalist. Storyteller. Voice with purpose.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
              {/* Image Section */}
              <div className="order-2 md:order-1 flex justify-center">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <img
                    src={kelseyportrait}
                    alt="Manasvi Rathore"
                    className="w-full h-auto object-cover rounded-full aspect-square shadow-lg"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
                  <span className="font-semibold text-foreground">
                    Dedicated to uncovering real stories with honesty, depth, and purpose.
                  </span>
                </p>

                <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
                  I'm a journalist and media storyteller passionate about uncovering narratives that often go unheard.
                  My work spans digital reporting, anchoring, voiceovers, and creative storytelling — all aimed at connecting people to truth, emotion, and perspective.
                </p>

                <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
                  Over the past few years, I've written 500+ articles — including 300+ SEO-optimized pieces —
                  and collaborated with leading platforms such as <span className="font-semibold">The Publicat</span>,
                  <span className="font-semibold"> Shekunj Foundation</span>, and <span className="font-semibold"> My FM 94.3</span>.
                  Whether behind a mic or in front of a story, I strive to blend clarity, empathy, and authenticity in everything I create.
                </p>
              </div>
            </div>

            {/* Approach Section */}
            <div className="bg-cream p-6 sm:p-8 lg:p-12 rounded-sm sm:rounded-md space-y-6 sm:space-y-8">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-center">
                My Approach to Journalism
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
                {/* Research */}
                <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-background/50 rounded-lg">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl">Research</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Every story begins with curiosity. I dive deep into facts, people, and perspectives to uncover the truth that lies beneath the surface.
                  </p>
                </div>

                {/* Empathy */}
                <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-background/50 rounded-lg">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl">Empathy</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Journalism is about listening first. My focus is always on understanding the emotion and humanity behind every story I tell.
                  </p>
                </div>

                {/* Clarity */}
                <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-background/50 rounded-lg">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl">Clarity</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    I believe powerful stories are simple, honest, and clear — connecting people through words, visuals, and voices that stay with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;