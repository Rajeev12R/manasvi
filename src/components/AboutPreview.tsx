import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import kelseyportrait from "@/assets/kelsey-portrait.jpg"
// import manasviPortrait from "@/assets/manasvi-portrait.jpg"; // replace with her actual image path

const AboutPreview = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={kelseyportrait} 
              alt="Manasvi Rathore" 
              className="w-full max-w-md object-cover mx-auto rounded-full"
            />
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="font-serif text-3xl md:text-4xl">
              Hi, I’m Manasvi — a storyteller, journalist, and voice that amplifies real stories.
            </h2>
            
            <p className="font-semibold">
              Based in Indore, Madhya Pradesh. Creating stories that resonate everywhere.
            </p>
            
            <p className="text-lg leading-relaxed">
              From on-ground reporting and digital storytelling to anchoring and voiceovers, 
              I believe journalism is about more than facts — it’s about people.  
              My work focuses on bringing depth, honesty, and emotion to every story, 
              helping audiences connect with the truth behind the headlines.
            </p>

            <Button 
              asChild
              variant="outline"
              size="lg"
              className="font-medium tracking-wide uppercase text-sm px-8"
            >
              <Link to="/about">More about Manasvi</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
