import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/palmpay-logo.png" 
                alt="PalmPay Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                PalmPay
              </span>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#how-it-works" className="text-white hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-white hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#web3" className="text-white hover:text-blue-400 transition-colors">Web3</a></li>
              <li><a href="#security" className="text-white hover:text-blue-400 transition-colors">Security</a></li>
              <li><a href="#faq" className="text-white hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              Download App
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#how-it-works" className="block px-3 py-2 text-white hover:bg-blue-700/20 rounded-md" onClick={() => setIsOpen(false)}>
              How It Works
            </a>
            <a href="#features" className="block px-3 py-2 text-white hover:bg-blue-700/20 rounded-md" onClick={() => setIsOpen(false)}>
              Features
            </a>
            <a href="#about" className="block px-3 py-2 text-white hover:bg-blue-700/20 rounded-md" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#web3" className="block px-3 py-2 text-white hover:bg-blue-700/20 rounded-md" onClick={() => setIsOpen(false)}>
              Web3
            </a>
            <a href="#security" className="block px-3 py-2 text-white hover:bg-blue-700/20 rounded-md" onClick={() => setIsOpen(false)}>
              Security
            </a>
            <a href="#faq" className="block px-3 py-2 text-white hover:bg-blue-700/20 rounded-md" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
            <div className="mt-4 px-3">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;