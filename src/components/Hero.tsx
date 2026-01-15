import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import jiya1 from "@/assets/jiya1.jpg";
import heroWorkspace from "@/assets/hero-workspace5.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background Accent */}
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-secondary to-transparent -z-10 opacity-50" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* 1. Hero Text (Headings) */}
          <div className="text-center md:text-left space-y-8 animate-fade-in-up md:col-start-1 md:row-start-1 md:self-end">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground">
              <span className="md:block md:whitespace-nowrap">Connecting voices</span>
              <span className="md:block md:whitespace-nowrap ml-1">with stories that</span>
              <span className="md:block md:whitespace-nowrap ml-2"><span className="italic text-accent-dark">matter</span>.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
              Insightful journalism and media storytelling, crafted with integrity, depth, and a touch of creativity.
            </p>
          </div>

          {/* 2. Hero Images Composition 
              Mobile: Appears 2nd (after text, before buttons)
              Desktop: Right column, spans 2 rows
          */}
          <div className="w-full max-w-md md:max-w-full relative animate-fade-in-up delay-100 md:col-start-2 md:row-span-2 md:row-start-1 order-last md:order-none"> {/* Applied order-last trick if needed, but DOM order is clearer */}
            {/* Actually, if I place this strictly in DOM order 2, it will be 2nd on mobile. 
               Text (1) -> Image (2) -> Buttons (3). This is exact mobile request.
               Desktop: Text (1,1), Image (2, 1-2), Buttons (1, 2). This works perfectly with Grid provided I place them in standard flow or explicit placement.
           */}
            {/* Main Image */}
            <div className="premium-border relative z-10 aspect-[3/4] md:aspect-square overflow-hidden rounded-2xl w-3/4 mx-auto md:mr-0 md:ml-auto ring-1 ring-white/50">
              <img
                src={jiya1}
                alt="Manasvi Rathore"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Secondary Image Overlay */}
            <div className="absolute -bottom-8 left-4 md:-bottom-12 md:-left-8 w-40 h-40 md:w-56 md:h-56 z-20">
              <div className="premium-border w-full h-full rounded-2xl overflow-hidden border-4 border-background animate-fade-in-up delay-200 ring-1 ring-black/5">
                <img
                  src={heroWorkspace}
                  alt="Workspace"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-accent/10 -z-10 blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary/5 -z-10 blur-3xl" />
          </div>

          {/* 3. CTA Buttons 
             Mobile: Appears 3rd (after image)
             Desktop: Left column, row 2 (under text)
          */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 md:pt-0 md:-mt-8 md:col-start-1 md:row-start-2 md:self-start">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/80 rounded-full px-8 h-12 text-sm font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link to="/work">View Latest Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-secondary rounded-full px-8 h-12 text-sm font-medium tracking-wide transition-all duration-300"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;