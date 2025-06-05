import React from 'react';
import { Scale, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Scale size={28} className="text-accent mr-2" />
              <span className="text-2xl font-playfair font-bold">Klamai</span>
            </div>
            <p className="text-gray-300 mb-6">
              Despacho de abogados con más de 25 años de experiencia ofreciendo servicios legales de calidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 hover:bg-accent p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-accent p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-accent p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-accent p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {['Derecho Civil', 'Derecho Mercantil', 'Derecho Laboral', 'Derecho Administrativo', 'Derecho Penal', 'Derecho Tributario'].map((service) => (
                <li key={service}>
                  <a href="#servicios" className="text-gray-300 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
                { name: 'Equipo', href: '#equipo' },
                { name: 'Testimonios', href: '#testimonios' },
                { name: 'Contacto', href: '#contacto' },
                { name: 'Política de Privacidad', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Boletín</h4>
            <p className="text-gray-300 mb-4">
              Suscríbete a nuestro boletín para recibir novedades legales y consejos jurídicos.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-accent text-primary px-4 py-2 rounded-r-lg font-medium hover:bg-accent-dark transition-colors"
                >
                  Enviar
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400">
              Al suscribirte, aceptas nuestra política de privacidad y el tratamiento de tus datos.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Klamai Abogados. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Aviso Legal
              </a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;