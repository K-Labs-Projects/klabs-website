import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/Home/HeroBanner';
import KnowledgeSection from './components/Home/KnowledgeSection';
import ClientsSection from './components/Home/ClientsSection';
import ServicesSection from './components/Home/ServicesSection';
import IndustriesSection from './components/Home/IndustriesSection';
import BlogsSection from './components/Home/BlogsSection';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import IndustriesPage from './components/Industries/Industries';
const Home = () => (
  <div className="min-h-screen bg-[#050505]">
    <Navbar />
    <HeroBanner />
    <KnowledgeSection />
    <ClientsSection />
    <ServicesSection />
    <IndustriesSection />
    <BlogsSection />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;