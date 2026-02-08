import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/Home/HeroBanner';
import KnowledgeSection from './components/Home/KnowledgeSection';
import ClientsSection from './components/Home/ClientsSection';
import ServicesSection from './components/Home/ServicesSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <HeroBanner />
      <KnowledgeSection />
      <ClientsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;