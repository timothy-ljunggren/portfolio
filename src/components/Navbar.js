import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 bg-opacity-30 backdrop-blur-lg fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-6xl z-10 rounded-xl border border-gray-200 border-opacity-20 shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={closeMobileMenu} className="flex items-center text-2xl font-bold text-white transform hover:scale-105 transition-transform duration-300">
              <img src="/logo.svg" alt="Logo" className="h-8 mr-3" />
              Timothy Ljunggren
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                Home
              </Link>
              <Link
                to="/resume"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                Resume
              </Link>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/resume"
            onClick={closeMobileMenu}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Resume
          </Link>
          <Link
            to="/projects"
            onClick={closeMobileMenu}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;