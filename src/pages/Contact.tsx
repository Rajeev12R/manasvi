import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-24 sm:pt-32 pb-20 px-6 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-secondary/30 to-transparent -z-10 opacity-60" />

          <div className="container mx-auto max-w-5xl">
            {/* Header Section */}
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-accent-dark font-medium tracking-widest uppercase text-sm mb-4 block">
                Get in Touch
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground leading-[1.1]">
                Let's start a conversation.
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                Have a story worth telling, an idea to collaborate on, or an opportunity to discuss?
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              {/* Left Column - Contact Info & Context (5 cols) */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-8">
                  <h2 className="font-serif text-3xl text-foreground">How we can work together</h2>

                  <div className="space-y-8">
                    {[
                      {
                        title: "Story Features",
                        desc: "Share stories that deserve a platform covering culture, society, and human experiences."
                      },
                      {
                        title: "Media & Voice",
                        desc: "Available for anchoring, narration, and voiceover projects for various media formats."
                      },
                      {
                        title: "Collaborations",
                        desc: "Open to partnerships with brands, NGOs, and creative teams for impactful projects."
                      }
                    ].map((item, i) => (
                      <div key={i} className="group">
                        <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-accent-dark transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-border/50">
                  <h3 className="font-serif text-2xl mb-4 text-foreground">Connect Directly</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-dark"></span>
                      jiya21rathore@gmail.com
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-dark"></span>
                      Indore, Madhya Pradesh
                    </p>
                  </div>
                  <div className="mt-6 text-sm text-accent-dark italic font-medium">
                    Response time: Usually within 2-3 days
                  </div>
                </div>
              </div>

              {/* Right Column - Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-card p-8 md:p-10 rounded-3xl shadow-sm border border-border/40 hover:shadow-xl transition-shadow duration-500">
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                        <Input
                          id="name"
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-secondary/30 border-transparent focus:bg-background focus:border-accent-dark transition-all h-12 px-4 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-secondary/30 border-transparent focus:bg-background focus:border-accent-dark transition-all h-12 px-4 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Collaboration proposal..."
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-secondary/30 border-transparent focus:bg-background focus:border-accent-dark transition-all h-12 px-4 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or idea..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-secondary/30 border-transparent focus:bg-background focus:border-accent-dark transition-all resize-none p-4 rounded-xl min-h-[160px]"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium tracking-wide uppercase text-sm py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                      >
                        Send Message
                      </Button>
                    </div>

                    {status && (
                      <div className={`p-4 rounded-xl text-center text-sm font-medium ${status.includes("successfully") ? "bg-green-50 text-green-700" :
                        status.includes("Sending") ? "bg-blue-50 text-blue-700" :
                          "bg-red-50 text-red-700"
                        }`}>
                        {status}
                      </div>
                    )}
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;