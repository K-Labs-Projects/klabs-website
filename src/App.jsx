import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import AboutPage from './components/AboutUs/AboutUs';
import Insights from './components/Insights/Insights';
import DigitalTransformation from './components/Services/DigitalTransformation';
import ProductEngineering from './components/Services/ProductEngineering';
import AIMLSolutions from './components/Services/AIServices';
import DataScienceAnalytics from './components/Services/DataServices';
import EGovernanceEnterprise from './components/Services/Egovernance';
import CloudDevOps from './components/Services/Cloud';
import CareerPage from './components/Career/Career';
import ContactPage from './components/ContactUs/ContactUs';
// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/services/product-engineering" element={<ProductEngineering />} />
        <Route path="/services/ai-ml-solutions" element={<AIMLSolutions />} />
        <Route path="/services/data-science-analytics" element={<DataScienceAnalytics />} />
        <Route path="/services/e-governance-enterprise" element={<EGovernanceEnterprise />} />
        <Route path="/services/cloud-devops" element={<CloudDevOps />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/insights" element={<Insights />} />
             <Route path="/careers" element={<CareerPage />} />
          <Route path="/contactus" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;