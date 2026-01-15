import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const Services = () => {
  const services = [
    {
      title: "Feature Writing",
      description:
        "In-depth, human-centered stories that explore culture, society, and real-life experiences. Every piece aims to inform, inspire, and connect with readers on a deeper level.",
    },
    {
      title: "Reporting & Research",
      description:
        "Accurate, insightful, and well-researched journalism across digital and print platforms — combining data, interviews, and field insights to reveal meaningful truths.",
    },
    {
      title: "Anchoring & Voiceovers",
      description:
        "Professional anchoring, narration, and voiceover work for radio, short films, and digital media — bringing stories to life with clarity, tone, and authenticity.",
    },
    {
      title: "Content Writing",
      description:
        "SEO-friendly blogs, news updates, and digital content that communicate ideas with precision and impact — crafted to engage modern readers.",
    },
    {
      title: "Scriptwriting",
      description:
        "Narrative-driven scripts for documentaries, podcasts, or short videos — combining structure and emotion to captivate audiences.",
    },
    {
      title: "Social Media Storytelling",
      description:
        "Creative digital storytelling and media strategy to expand reach, build engagement, and translate impactful journalism for modern platforms.",
    },
    {
      title: "Interviews & Profiles",
      description:
        "Authentic, conversational interviews and profiles that highlight the human side of individuals, brands, or movements — grounded in empathy and curiosity.",
    },
    {
      title: "Copyediting & Proofreading",
      description:
        "Detailed review of written work to ensure accuracy, flow, and tone consistency across articles, scripts, or digital publications.",
    },
    {
      title: "Media Collaborations",
      description:
        "Available for collaborations with media houses, NGOs, or creative teams working on projects that inform, empower, or inspire.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl mb-6">What I Do</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Exploring stories, voices, and ideas that shape the world — through words, visuals, and sound.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="space-y-4 pb-8 border-b border-border"
                >
                  <h2 className="font-serif text-2xl">{service.title}</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-secondary/40 p-12 rounded-xl text-center space-y-6 border border-border/50">
              <h2 className="font-serif text-3xl text-foreground">Open to Collaborations</h2>
              <p className="text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                Whether it’s a story, campaign, documentary, or digital feature — I’m open to working with organizations and creators who believe in impactful storytelling.
                Let’s create something meaningful together.
              </p>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
