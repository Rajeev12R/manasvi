import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-20 sm:py-24 px-6 bg-secondary/50 relative overflow-hidden">
      {/* Abstract decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-3xl text-center space-y-6 relative z-10">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight font-medium text-foreground">
          Ready to tell stories that truly matter?
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-muted-foreground max-w-2xl mx-auto">
          Whether it's an interview, collaboration, or feature opportunity — let's connect and bring meaningful stories to life.
        </p>

        <div className="pt-8">
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/80 font-medium tracking-wide uppercase text-sm px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Link to="/contact">Contact Manasvi</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;