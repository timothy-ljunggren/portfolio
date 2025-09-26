import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Copyright */}
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Timothy Ljunggren. Alle Rechte vorbehalten.</p>
          </div>
          
          {/* Right side - Legal Links */}
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Datenschutz
            </Link>
            <Link 
              to="/imprint" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;