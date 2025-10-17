import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import kelseyportrait from "@/assets/kelsey-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl mb-6">About Manasvi</h1>
              <p className="text-xl text-muted-foreground">
                Journalist. Storyteller. Voice with purpose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img
                src={kelseyportrait}
                alt="Manasvi Rathore"
                className="w-full object-cover max-w-sm mx-auto rounded-full"
              />

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">
                    Dedicated to uncovering real stories with honesty, depth, and purpose.
                  </span>
                </p>

                <p className="text-lg leading-relaxed">
                  I’m a journalist and media storyteller passionate about uncovering narratives that often go unheard.
                  My work spans digital reporting, anchoring, voiceovers, and creative storytelling — all aimed at connecting people to truth, emotion, and perspective.
                </p>

                <p className="text-lg leading-relaxed">
                  Over the past few years, I’ve written 500+ articles — including 300+ SEO-optimized pieces —
                  and collaborated with leading platforms such as <span className="font-semibold">The Publicat</span>,
                  <span className="font-semibold">Shekunj Foundation</span>, and <span className="font-semibold">My FM 94.3</span>.
                  Whether behind a mic or in front of a story, I strive to blend clarity, empathy, and authenticity in everything I create.
                </p>
              </div>
            </div>

            <div className="bg-cream p-12 rounded-sm space-y-8">
              <h2 className="font-serif text-3xl text-center">My Approach to Journalism</h2>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl">Research</h3>
                  <p>
                    Every story begins with curiosity. I dive deep into facts, people, and perspectives to uncover the truth that lies beneath the surface.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl">Empathy</h3>
                  <p>
                    Journalism is about listening first. My focus is always on understanding the emotion and humanity behind every story I tell.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl">Clarity</h3>
                  <p>
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
