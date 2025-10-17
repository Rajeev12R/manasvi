import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import patternBg from "@/assets/pattern-bg.jpg";

const DeepDive = () => {
  return (
    <section 
      className="py-32 px-6 relative"
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-8 text-center">
          <h3 className="font-serif text-xl md:text-2xl font-light">
            If you’ve spent years searching for stories that truly matter...
          </h3>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium">
            It’s time to go deeper.
          </h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              It’s time to uncover the voices that often go unheard — to ask sharper questions, chase raw truths, and craft stories that move people.
            </p>
            
            <p className="text-lg leading-relaxed">
              It’s time to bring a more human narrative to every platform — from a newsroom report to a social documentary, from a live voiceover to a digital campaign.
            </p>
            
            <p className="text-lg leading-relaxed">
              It’s time to create journalism that connects beyond headlines — stories that make people feel, think, and act.
            </p>
            
            <p className="text-lg font-medium">
              Because real journalism isn’t just about information.
            </p>
            <p className="text-lg font-medium">
              It’s about impact.
            </p>
            <p className="text-lg font-medium">
              It’s time. Let’s tell deeper stories, together.
            </p>
          </div>

          <Button 
            asChild
            size="lg"
            className="bg-cream text-foreground hover:bg-muted font-medium tracking-wide uppercase text-sm px-8 mt-8"
          >
            <Link to="/work">Explore My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeepDive;
