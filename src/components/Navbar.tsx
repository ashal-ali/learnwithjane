import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl md:text-3xl font-serif font-semibold text-tutor-navy">Jane Zafran</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-tutor-gray hover:text-tutor-teal transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-tutor-gray hover:text-tutor-teal transition-colors font-medium">About</Link>
            <Link to="/services" className="text-tutor-gray hover:text-tutor-teal transition-colors font-medium">Services</Link>
            <Link to="/pricing" className="text-tutor-gray hover:text-tutor-teal transition-colors font-medium">Pricing</Link>
            <Link to="/faq" className="text-tutor-gray hover:text-tutor-teal transition-colors font-medium">FAQ</Link>
            <Link to="/publications" className="text-tutor-gray hover:text-tutor-teal transition-colors font-medium">Portfolio</Link>
            <Link to="/contact" className="text-tutor-gray hover:text-tutor-teal transition-colors font-medium">Contact</Link>
            <a 
              href="https://www.linkedin.com/in/janezafran/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-tutor-teal hover:text-tutor-navy transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-tutor-navy hover:text-tutor-teal focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              className="block px-3 py-2 text-tutor-gray hover:text-tutor-teal transition-colors font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-tutor-gray hover:text-tutor-teal transition-colors font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-tutor-gray hover:text-tutor-teal transition-colors font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-tutor-gray hover:text-tutor-teal transition-colors font-medium"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              to="/faq" 
              className="block px-3 py-2 text-tutor-gray hover:text-tutor-teal transition-colors font-medium"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link 
              to="/publications" 
              className="block px-3 py-2 text-tutor-gray hover:text-tutor-teal transition-colors font-medium"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-tutor-gray hover:text-tutor-teal transition-colors font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <a 
              href="https://www.linkedin.com/in/janezafran/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-3 py-2 text-tutor-teal hover:text-tutor-navy transition-colors font-medium"
              onClick={toggleMenu}
            >
              <Linkedin size={20} className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
