import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Digital Transformation',
      description:
        'Modernize legacy systems and accelerate your digital journey with future-ready solutions.',
      image: '/images/digital1.png',
      link: '/services/digital-transformation',
    },
    {
      title: 'Product Engineering',
      description:
        'End-to-end product development from ideation to deployment with scalable architecture.',
      image: '/images/digital2.png',
      link: '/services/product-engineering',
    },
    {
      title: 'Data Science & Analytics',
      description:
        'Turn raw data into actionable insights with advanced analytics and visualization.',
      image: '/images/digital4.png',
      link: '/services/data-science-analytics',
    },
    {
      title: 'AI / ML Solutions',
      description:
        'Leverage artificial intelligence and machine learning to automate and innovate.',
      image: '/images/digital3.png',
      link: '/services/ai-ml-solutions',
    },
    {
      title: 'E-Governance & Enterprise Solutions',
      description:
        'Scalable platforms for government departments and large-scale enterprise operations.',
      image: '/images/digital5.png',
      link: '/services/e-governance-enterprise',
    },
    {
      title: 'Cloud Services & DevOps',
      description:
        'Cloud migration, infrastructure management, and CI/CD pipelines for agile delivery.',
      image: '/images/digital6.png',
      link: '/services/cloud-devops',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Video Banner - Dark */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/main.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-medium text-white font-bold"
          >
            Services
          </motion.h1>
        </div>
      </div>

      {/* Services Section - Light */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* 3-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-300 cursor-pointer"
                onClick={() => navigate(service.link)}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 font-semibold group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-200">
                    <HiArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors duration-200" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;