import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-teal text-white">
      <div className="container mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-tight">
          Ready to tell stories that truly matter?
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-2xl mx-auto">
          Whether it's an interview, collaboration, or feature opportunity — let's connect and bring meaningful stories to life.
        </p>

        <div className="pt-2 sm:pt-4">
          <Button 
            asChild
            size="lg"
            className="bg-white text-teal hover:bg-cream font-medium tracking-wide uppercase text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4"
          >
            <Link to="/contact">Contact Manasvi</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;