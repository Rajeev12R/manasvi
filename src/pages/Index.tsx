import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import DeepDive from "@/components/DeepDive";
import Testimonial from "@/components/Testimonial";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import AboutPreview from "@/components/AboutPreview";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ClientLogos />
        {/* <DeepDive /> */}
        <Testimonial />
        <FeaturedWork />
        <Services />
        <AboutPreview />
        <TestimonialsGrid />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
