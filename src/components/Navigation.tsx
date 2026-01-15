import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center",
          scrolled ? "pt-4" : "pt-6"
        )}
      >
        <div
          className={cn(
            "transition-all duration-300 w-full max-w-6xl mx-auto px-6",
            scrolled ? "max-w-2xl px-0" : ""
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300 backdrop-blur-md border border-transparent",
              scrolled
                ? "bg-background/80 rounded-full py-2 px-6 shadow-sm border-border/50"
                : "bg-transparent py-2"
            )}
          >
            {/* Logo */}
            <Link
              to="/"
              className={cn(
                "font-serif font-bold tracking-tight text-foreground transition-all",
                scrolled ? "text-lg" : "text-xl md:text-2xl"
              )}
            >
              manasvi rathore
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-sm font-medium tracking-wide hover:text-accent-dark transition-colors group text-foreground/80"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-2xl text-foreground hover:text-accent-dark transition-colors p-1"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl animate-fade-in flex flex-col items-center justify-center space-y-8">
          {/* Close Button position relative to viewport */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-6 text-3xl text-foreground/80 hover:text-foreground transition-colors"
          >
            <HiX />
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-serif text-3xl text-foreground hover:text-accent-dark transition-colors tracking-tight"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-12 text-sm text-muted-foreground uppercase tracking-widest">
            Journalist & Storyteller
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;