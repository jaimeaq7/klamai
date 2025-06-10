import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen bg-hero-pattern bg-cover bg-center flex items-center text-white"
    >
      <div className="container-custom py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Defendemos tus derechos con pasión y experiencia
          </h1>
          
  
  
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            En Klamai Abogados ofrecemos soluciones legales efectivas y personalizadas para proteger tus intereses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="btn-secondary"
            >
              Consulta Gratuita
            </button>
            <button 
              onClick={() => scrollToSection('servicios')} 
              className="btn-primary"
            >
              Nuestros Servicios
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('servicios')} 
            className="text-white hover:text-accent transition-colors"
            aria-label="Ir a servicios"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;