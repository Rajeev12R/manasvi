import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import jiya1 from "@/assets/jiya1.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Text - Comes First on Mobile */}
          <div className="order-1 lg:order-2 text-center lg:text-left w-full">
            <div className="space-y-6">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Connecting voices with the stories that matter.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Insightful journalism and media storytelling, crafted with integrity and creativity for real impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Button 
                asChild
                size="lg"
                className="bg-cream text-foreground hover:bg-muted font-medium tracking-wide uppercase text-sm px-6 sm:px-8"
              >
                <Link to="/work">See the Work</Link>
              </Button>
            </div>
          </div>

          {/* Images Collage - Comes Second on Mobile */}
          <div className="relative order-2 lg:order-1 w-full mt-8 lg:mt-0">
            {/* Main Image */}
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              <img 
                src={jiya1} 
                alt="Professional working at desk" 
                className="w-full rounded-sm shadow-lg"
              />
            </div>
            
            {/* Overlay Image - Smaller on Mobile */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 lg:-bottom-8 lg:right-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 z-20">
              <img 
                src={heroWorkspace} 
                alt="Minimal workspace" 
                className="w-full h-full object-cover rounded-sm shadow-lg"
              />
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-accent/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;