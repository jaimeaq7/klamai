import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-montserrat text-gray-800">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Team />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;