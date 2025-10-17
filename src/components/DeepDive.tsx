import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import patternBg from "@/assets/pattern-bg.jpg";

const DeepDive = () => {
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-6 sm:space-y-8 text-center">
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
            If you've spent years searching for stories that truly matter...
          </h3>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            It's time to go deeper.
          </h2>
          
          <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
              It's time to uncover the voices that often go unheard — to ask sharper questions, chase raw truths, and craft stories that move people.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
              It's time to bring a more human narrative to every platform — from a newsroom report to a social documentary, from a live voiceover to a digital campaign.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
              It's time to create journalism that connects beyond headlines — stories that make people feel, think, and act.
            </p>
            
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <p className="text-base sm:text-lg font-medium">
                Because real journalism isn't just about information.
              </p>
              <p className="text-base sm:text-lg font-medium">
                It's about impact.
              </p>
              <p className="text-base sm:text-lg font-medium">
                It's time. Let's tell deeper stories, together.
              </p>
            </div>
          </div>

          <div className="pt-4 sm:pt-6 md:pt-8">
            <Button 
              asChild
              size="lg"
              className="bg-cream text-foreground hover:bg-muted font-medium tracking-wide uppercase text-xs sm:text-sm px-6 sm:px-8 py-3"
            >
              <Link to="/work">Explore My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDive;