import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroWoman from "@/assets/hero-woman.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images Collage */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroWoman} 
                alt="Professional working at desk" 
                className="w-full max-w-md rounded-sm shadow-lg"
              />
            </div>
            <div className="absolute -bottom-8 right-4 w-64 h-64 z-20">
              <img 
                src={heroWorkspace} 
                alt="Minimal workspace" 
                className="w-full h-full object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl leading-tight">
                Connecting voices with the stories that matter.
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Insightful journalism and media storytelling, crafted with integrity and creativity for real impact.
              </p>
            </div>

            <Button 
              asChild
              size="lg"
              className="bg-cream text-foreground hover:bg-muted font-medium tracking-wide uppercase text-sm px-8"
            >
              <Link to="/work">See the Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
