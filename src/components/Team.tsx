import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const lawyers = [
  {
    id: 1,
    name: 'Alberto Méndez',
    position: 'Socio Director',
    specialties: 'Derecho Mercantil y Tributario',
    image: 'https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Carmen Vázquez',
    position: 'Socia',
    specialties: 'Derecho Civil y Familia',
    image: 'https://images.pexels.com/photos/5668895/pexels-photo-5668895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Javier Sánchez',
    position: 'Socio',
    specialties: 'Derecho Penal y Procesal',
    image: 'https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Laura Gómez',
    position: 'Abogada Senior',
    specialties: 'Derecho Laboral',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Team: React.FC = () => {
  return (
    <section id="equipo" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestro Equipo de Expertos</h2>
          <p className="section-subtitle">
            Contamos con abogados especializados en cada área del derecho para ofrecerte el mejor asesoramiento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lawyers.map((lawyer, index) => (
            <div 
              key={lawyer.id} 
              className="card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={lawyer.image} 
                  alt={lawyer.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <h3 className="text-xl font-bold">{lawyer.name}</h3>
                  <p className="text-sm text-gray-200">{lawyer.position}</p>
                </div>
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-accent transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-accent transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-accent transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <p className="text-primary font-medium">{lawyer.specialties}</p>
                <p className="text-gray-600 mt-2">
                  Experto en su campo con más de 15 años de experiencia asesorando a clientes particulares y empresas.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;