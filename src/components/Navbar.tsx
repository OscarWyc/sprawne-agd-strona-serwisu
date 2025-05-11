
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">
            Sprawne<span className="text-gray-800">AGD</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Strona główna
          </button>
          <button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Usługi
          </button>
          <button onClick={() => navigateTo('about')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            O nas
          </button>
          <button onClick={() => navigateTo('testimonials')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Opinie
          </button>
          <button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Kontakt
          </button>
          <Button onClick={() => navigateTo('appointment')} className="bg-blue-600 hover:bg-blue-700">
            Umów wizytę
          </Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Button onClick={() => navigateTo('appointment')} variant="outline" size="sm" className="mr-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Umów wizytę
          </Button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-blue-600 font-medium p-2 text-left">
            Strona główna
          </button>
          <button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-blue-600 font-medium p-2 text-left">
            Usługi
          </button>
          <button onClick={() => navigateTo('about')} className="text-gray-700 hover:text-blue-600 font-medium p-2 text-left">
            O nas
          </button>
          <button onClick={() => navigateTo('testimonials')} className="text-gray-700 hover:text-blue-600 font-medium p-2 text-left">
            Opinie
          </button>
          <button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-blue-600 font-medium p-2 text-left">
            Kontakt
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
