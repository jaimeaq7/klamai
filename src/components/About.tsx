import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    'Más de 25 años de experiencia en el sector legal',
    'Equipo de abogados especialistas en cada área',
    'Atención personalizada y cercana',
    'Comunicación constante durante todo el proceso',
    'Altas tasas de éxito en los casos que gestionamos',
    'Honorarios transparentes sin sorpresas'
  ];

  return (
    <section id="sobre-nosotros" className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="section-title">¿Por qué elegir Klamai Abogados?</h2>
            <p className="text-gray-600 mb-6">
              Desde 1998, nuestro despacho ha representado con éxito a miles de clientes en toda España, 
              consiguiendo resultados excepcionales y estableciendo precedentes legales. Nuestro compromiso
              con la excelencia y la atención personalizada nos distingue.
            </p>
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            <a href="#contacto" className="btn-primary inline-block">
              Consulta con nosotros
            </a>
          </div>
          
          <div className="lg:pl-12 animate-slide-in-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-tl-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Equipo de abogados de Klamai" 
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-br-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;