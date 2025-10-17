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
      const res = await fetch("https://manasvi-3jq4.onrender.com/send", { // replace with your backend URL
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
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl mb-6">Let’s Connect</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a story worth telling, an idea to collaborate on, or an opportunity to discuss?  
                I’d love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl mb-4">How We Can Work Together</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">1. Story Features & Collaborations</span><br />
                      Reach out if you have a story that deserves a platform or wish to collaborate on meaningful coverage.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">2. Media & Voice Work</span><br />
                      Available for anchoring, narration, and voiceover projects for news, short films, or campaigns.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">3. Writing & Research</span><br />
                      Open to editorial, digital, and creative writing projects that align with truth and storytelling.
                    </p>
                  </div>
                </div>

                <div className="bg-teal-light p-8 rounded-sm space-y-4">
                  <h3 className="font-serif text-xl">Current Availability</h3>
                  <p>
                    I’m currently open for collaborations, freelance assignments, and media projects.  
                    Feel free to reach out — I usually respond within 2–3 days.
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-sm border border-border">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Interview, collaboration, project..." value={formData.subject} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me a bit about your story, idea, or project." 
                      rows={6} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-teal hover:bg-teal/90 text-white font-medium tracking-wide uppercase"
                  >
                    Send Message
                  </Button>
                  {status && <p className="mt-2 text-center">{status}</p>}
                </form>
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
