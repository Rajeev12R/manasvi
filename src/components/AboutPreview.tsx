import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import jiya2 from "@/assets/jiya2.jpg"

const AboutPreview = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Section - First on mobile, second on desktop */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img 
                src={jiya2} 
                alt="Manasvi Rathore" 
                className="w-full h-auto object-cover rounded-full aspect-square shadow-lg"
              />
            </div>
          </div>
          
          {/* Content Section - Second on mobile, first on desktop */}
          <div className="order-2 md:order-1 space-y-4 sm:space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-tight md:leading-tight">
              Hi, I'm Manasvi — a storyteller, journalist, and voice that amplifies real stories.
            </h2>
            
            <p className="font-semibold text-base sm:text-lg md:text-xl text-muted-foreground">
              Based in Indore, Madhya Pradesh. Creating stories that resonate everywhere.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
              From on-ground reporting and digital storytelling to anchoring and voiceovers, 
              I believe journalism is about more than facts — it's about people.  
              My work focuses on bringing depth, honesty, and emotion to every story, 
              helping audiences connect with the truth behind the headlines.
            </p>

            <div className="pt-2 sm:pt-4">
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="font-medium tracking-wide uppercase text-xs sm:text-sm px-6 sm:px-8 py-2 sm:py-3"
              >
                <Link to="/about">More about Manasvi</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;