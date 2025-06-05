import React, { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Scale 
            size={32} 
            className={`mr-2 ${isScrolled ? 'text-primary' : 'text-accent'}`} 
          />
          <span className={`text-2xl font-playfair font-bold ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            Klamai
          </span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Inicio', 'Servicios', 'Sobre Nosotros', 'Equipo', 'Testimonios', 'Contacto'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleNavClick}
                  className={`font-medium hover:text-accent transition-colors ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className={`p-2 focus:outline-none ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect animate-fade-in">
          <ul className="py-4">
            {['Inicio', 'Servicios', 'Sobre Nosotros', 'Equipo', 'Testimonios', 'Contacto'].map((item) => (
              <li key={item} className="px-6 py-2">
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleNavClick}
                  className="block text-gray-800 hover:text-primary font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;