import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import jiya2 from "@/assets/jiya2.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Main Introduction Section */}
        <section className="pt-32 sm:pt-40 pb-20 px-6 bg-background relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-secondary/30 to-transparent -z-10" />

          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              {/* Image Column */}
              <div className="order-2 lg:order-1 relative group">
                <div className="relative z-10 h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={jiya2}
                    alt="Manasvi Rathore"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Decorative frames */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary rounded-2xl -z-20" />
              </div>

              {/* Content Column */}
              <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8 lg:space-y-10">
                <div>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
                    About Manasvi
                  </h1>
                  <p className="text-xl sm:text-2xl text-accent-dark font-medium font-serif italic">
                    Journalist. Storyteller. Voice with purpose.
                  </p>
                </div>

                <div className="space-y-6 text-muted-foreground text-lg sm:text-lg leading-relaxed font-light">
                  <p className="text-foreground font-medium text-xl">
                    Dedicated to uncovering real stories with honesty, depth, and purpose.
                  </p>

                  <p>
                    I'm a journalist and media storyteller passionate about uncovering narratives that often go unheard.
                    My work spans digital reporting, anchoring, voiceovers, and creative storytelling — all aimed at connecting people to truth, emotion, and perspective.
                  </p>

                  <p>
                    Over the past few years, I've written 500+ articles — including 300+ SEO-optimized pieces —
                    and collaborated with leading platforms such as <span className="font-medium text-foreground">The Journalist</span>,
                    <span className="font-medium text-foreground"> Shekunj Foundation</span> and <span className="font-medium text-foreground"> My FM 94.3</span>.
                    Whether behind a mic or in front of a story, I strive to blend clarity, empathy, and authenticity in everything I create.
                  </p>
                </div>

                <div className="pt-4">
                  <div className="inline-block bg-secondary/50 px-6 py-4 rounded-xl border border-accent/20">
                    <p className="font-serif text-foreground text-lg italic">
                      "Journalism is not just about reporting facts; it's about understanding the humanity behind them."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-center mb-16 text-foreground">
              My Approach to Journalism
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Research",
                  description: "Every story begins with curiosity. I dive deep into facts, people, and perspectives to uncover the truth that lies beneath the surface."
                },
                {
                  title: "Empathy",
                  description: "Journalism is about listening first. My focus is always on understanding the emotion and humanity behind every story I tell."
                },
                {
                  title: "Clarity",
                  description: "I believe powerful stories are simple, honest, and clear — connecting people through words, visuals, and voices that stay with them."
                }
              ].map((item, index) => (
                <div key={index} className="bg-background p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-1 bg-accent mb-6" />
                  <h3 className="font-serif text-2xl mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
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