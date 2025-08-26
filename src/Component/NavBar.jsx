import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
import logo from "../assets/psd-2-html.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook, 
  faGooglePlusG, 
  faTwitter, 
  faPinterestP, 
  faBehance, 
  faDribbble 
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect: change background/shadow
  useEffect(() => {
    const handleScroll = () => {
      const miniHeaderHeight = 48;
      setIsNavFixed(window.scrollY > miniHeaderHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen]);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "BLOG", href: "#blog" },
    { name: "PAGE", href: "#page" },
    { name: "FEATURES", href: "#service" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Top Mini Header */}
      <header className="bg-gray-50 shadow-md h-12">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs md:text-base h-full">
          <div className="flex gap-4 text-gray-600">
            <p><FontAwesomeIcon icon={faEnvelope} className="mr-1" /> info@reen.com</p>
            <p><FontAwesomeIcon icon={faMobileAlt} className="mr-1" /> +00 (123) 456 78 90</p>
          </div>
          <div className="flex gap-3 text-gray-600">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
            <a href="#"><FontAwesomeIcon icon={faBehance} /></a>
            <a href="#"><FontAwesomeIcon icon={faDribbble} /></a>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isNavFixed
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-gray-50"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-4">
          {/* Brand */}
          <a href="#hero" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="transition-colors duration-300 text-sm text-foreground hover:font-semibold hover:text-eighth capitalize"
              >
                {name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="md:hidden text-foreground p-2 z-50 hover:text-primary"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center space-y-6 transition-opacity duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-sm text-foreground hover:text-eighth font-semibold capitalize"
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
