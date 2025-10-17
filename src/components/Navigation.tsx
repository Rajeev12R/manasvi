import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity"
        >
          manasvi rathore
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors group"
            >
              {link.name}
              {/* Underline Animation */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                location.pathname === link.path ? 'w-full' : ''
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl text-foreground hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu Panel - Slides from right */}
          <div className="md:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-background">
                <span className="font-serif text-xl font-medium">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-foreground hover:text-accent transition-colors p-2"
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6 bg-background">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="relative text-xl font-medium tracking-wide uppercase hover:text-accent transition-colors group py-2"
                  >
                    {link.name}
                    {/* Mobile Underline Animation */}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                      location.pathname === link.path ? 'w-full' : ''
                    }`} />
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border text-center bg-background">
                <p className="text-sm text-muted-foreground">
                  Journalist & Storyteller
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;