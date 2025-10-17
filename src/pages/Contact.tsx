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
      const res = await fetch("https://manasvi-3jq4.onrender.com/send", {
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
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
                Let's Connect
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have a story worth telling, an idea to collaborate on, or an opportunity to discuss?  
                I'd love to hear from you.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Left Column - Information */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl mb-4 sm:mb-6">How We Can Work Together</h2>
                  <div className="space-y-4 sm:space-y-6 text-muted-foreground">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground text-base sm:text-lg">
                        1. Story Features & Collaborations
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed">
                        Reach out if you have a story that deserves a platform or wish to collaborate on meaningful coverage.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground text-base sm:text-lg">
                        2. Media & Voice Work
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed">
                        Available for anchoring, narration, and voiceover projects for news, short films, or campaigns.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground text-base sm:text-lg">
                        3. Writing & Research
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed">
                        Open to editorial, digital, and creative writing projects that align with truth and storytelling.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Availability Section */}
                <div className="bg-teal-light p-6 sm:p-8 rounded-sm space-y-3 sm:space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl">Current Availability</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    I'm currently open for collaborations, freelance assignments, and media projects.  
                    Feel free to reach out — I usually respond within 2–3 days.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl">Direct Contact</h3>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p>Email: jiya21rathore@gmail.com</p>
                    <p>Based in: Indore, Madhya Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-card p-6 sm:p-8 rounded-sm border border-border order-1 lg:order-2">
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="text-sm sm:text-base py-2 sm:py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="text-sm sm:text-base py-2 sm:py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm sm:text-base">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Interview, collaboration, project..." 
                      value={formData.subject} 
                      onChange={handleChange} 
                      className="text-sm sm:text-base py-2 sm:py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me a bit about your story, idea, or project." 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      className="text-sm sm:text-base resize-vertical min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-teal hover:bg-teal/90 text-white font-medium tracking-wide uppercase text-sm sm:text-base py-3 sm:py-4"
                  >
                    Send Message
                  </Button>
                  
                  {status && (
                    <p className={`text-center text-sm sm:text-base mt-2 ${
                      status.includes("successfully") ? "text-green-600" : 
                      status.includes("Sending") ? "text-blue-600" : 
                      "text-red-600"
                    }`}>
                      {status}
                    </p>
                  )}
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