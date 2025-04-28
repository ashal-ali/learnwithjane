import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tutor-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Jane Zafran</h3>
            <div className="text-gray-300">
              <p>English 9-12 Academic Tutor</p>
              <p>College Application Essay Editor</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/publications" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: <a href="mailto:jane@janezafran.com" className="hover:text-white transition-colors">jane@janezafran.com</a></p>
              <p>Phone: <a href="tel:+16507735654" className="hover:text-white transition-colors">650-773-5654</a></p>
              <a 
                href="https://www.linkedin.com/in/janezafran/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors mt-2"
              >
                <Linkedin size={20} className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {currentYear} Jane Zafran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
