import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl">
            Manasvi Rathore
          </div>
          
          <div className="flex gap-8 text-sm">
            <Link to="/" className="hover:text-teal-light transition-colors">Home</Link>
            <Link to="/about" className="hover:text-teal-light transition-colors">About</Link>
            <Link to="/work" className="hover:text-teal-light transition-colors">Work</Link>
            <Link to="/services" className="hover:text-teal-light transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-teal-light transition-colors">Contact</Link>
          </div>
          
          <div className="text-sm text-background/70">
            © {new Date().getFullYear()} Manasvi Rathore. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
