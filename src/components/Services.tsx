import React from 'react';
import { 
  Home, 
  Briefcase, 
  Users, 
  FileText, 
  Shield, 
  Scale 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Derecho Civil',
    description: 'Asesoramiento en contratos, arrendamientos, herencias, reclamaciones y responsabilidad civil.',
    icon: <Home className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
  },
  {
    id: 2,
    title: 'Derecho Mercantil',
    description: 'Constitución de sociedades, fusiones, contratos mercantiles y asesoramiento empresarial.',
    icon: <Briefcase className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
  },
  {
    id: 3,
    title: 'Derecho Laboral',
    description: 'Despidos, modificaciones contractuales, negociaciones y asesoramiento laboral integral.',
    icon: <Users className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
  },
  {
    id: 4,
    title: 'Derecho Administrativo',
    description: 'Gestiones ante la administración pública, recursos administrativos y contenciosos.',
    icon: <FileText className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
  },
  {
    id: 5,
    title: 'Derecho Penal',
    description: 'Defensa y acusación en procesos penales, asesoramiento en delitos económicos y más.',
    icon: <Shield className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
  },
  {
    id: 6,
    title: 'Derecho Tributario',
    description: 'Planificación fiscal, recursos ante la administración tributaria y asesoramiento fiscal.',
    icon: <Scale className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios\" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestras Áreas de Práctica</h2>
          <p className="section-subtitle">
            Ofrecemos asesoramiento jurídico personalizado y de la más alta calidad en diferentes ramas del derecho
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="card p-6 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;