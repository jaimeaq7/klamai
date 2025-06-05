import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    aceptaTerminos: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a un backend
    console.log(formData);
    setFormSubmitted(true);
    // Resetear el formulario después de enviar
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: '',
      aceptaTerminos: false
    });
    
    // Simulamos que después de 5 segundos, volvemos a permitir enviar el formulario
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Contacta con Nosotros</h2>
          <p className="section-subtitle">
            Estamos aquí para ayudarte. Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-primary mb-6">Solicita tu consulta gratuita</h3>
            
            {formSubmitted ? (
              <div className="bg-success bg-opacity-10 border border-success text-success p-4 rounded-lg animate-fade-in">
                <p className="font-medium">¡Mensaje enviado con éxito!</p>
                <p className="text-sm mt-1">Nos pondremos en contacto contigo en las próximas 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-700 mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Tu nombre y apellidos"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-gray-700 mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="600 000 000"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="asunto" className="block text-gray-700 mb-2">Área legal *</label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Selecciona un área</option>
                    <option value="Civil">Derecho Civil</option>
                    <option value="Mercantil">Derecho Mercantil</option>
                    <option value="Laboral">Derecho Laboral</option>
                    <option value="Administrativo">Derecho Administrativo</option>
                    <option value="Penal">Derecho Penal</option>
                    <option value="Tributario">Derecho Tributario</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="mensaje" className="block text-gray-700 mb-2">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="form-input min-h-32"
                    placeholder="Cuéntanos brevemente tu caso"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="aceptaTerminos"
                      checked={formData.aceptaTerminos}
                      onChange={handleCheckboxChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      Acepto la política de privacidad y el tratamiento de mis datos personales para que Klamai Abogados pueda contactarme. *
                    </span>
                  </label>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Enviar Consulta
                </button>
              </form>
            )}
          </div>
          
          <div className="animate-slide-in-right">
            <div className="bg-primary text-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p>+34 91 123 45 67</p>
                    <p className="text-gray-300 text-sm">Lun-Vie 9:00-19:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@klamai.es</p>
                    <p className="text-gray-300 text-sm">Respondemos en 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p>Calle Gran Vía 42, 4º</p>
                    <p>28013 Madrid, España</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Horario</p>
                    <p>Lunes a Viernes</p>
                    <p>9:00 - 19:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.560795419939!2d-3.7058170842848447!3d40.420495279365644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228835d4aa965%3A0x3e8b13d0c6d88d19!2sGran%20V%C3%ADa%2C%2042%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1624973268101!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Ubicación de Klamai Abogados"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;