import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const IndustriesPage = () => {
  const industries = [
    {
      title: 'Retail',
      description:
        'Streamline operations, enhance customer experiences, and drive growth with smart retail solutions.',
          image: "/images/industries1.png"
    },
    {
      title: 'Finance',
      description:
        'Secure, compliant financial platforms with real-time analytics and seamless transaction processing.',
        image: "/images/industries2.png"
    },
    {
      title: 'Education',
      description:
        'Empower institutions with digital tools that transform learning, administration, and engagement.',
           image: "/images/industries3.png"
    },
    {
      title: 'Legal',
      description:
        'Modernize legal workflows with secure document management, case tracking, and compliance automation.',
         image: "/images/industries4.png"
    },
    {
      title: 'Healthcare',
      description:
        'Patient-centric digital health solutions for hospitals, clinics, and public health systems.',
       image: "/images/industries5.png"
    },
    {
      title: 'Logistics',
      description:
        'Optimize supply chain, fleet management, and real-time tracking for efficient delivery operations.',
           image: "/images/industries6.png"
    },
    {
      title: 'Manufacturing',
      description:
        'Smart factory solutions with IoT integration, production monitoring, and quality control systems.',
      image: "/images/industries7.png"
    },
    {
      title: 'Government',
      description:
        'Drive digital transformation in public services with scalable, secure, citizen-centric platforms.',
      image: "/images/industries8.png"
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
          <source src="/videos/industries1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-medium text-white font-bold"
          >
            Industries
          </motion.h1>
        </div>
      </div>

      {/* Industries Section - Light */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* 3-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 font-semibold group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-sm mb-4">
                    {item.description}
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

export default IndustriesPage;