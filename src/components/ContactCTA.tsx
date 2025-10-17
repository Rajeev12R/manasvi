import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-32 px-6 bg-teal text-white">
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl">
          Ready to tell stories that truly matter?
        </h2>
        
        <p className="text-lg">
          Whether it’s an interview, collaboration, or feature opportunity — let’s connect and bring meaningful stories to life.
        </p>

        <Button 
          asChild
          size="lg"
          className="bg-white text-teal hover:bg-cream font-medium tracking-wide uppercase text-sm px-8"
        >
          <Link to="/contact">Contact Manasvi</Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
