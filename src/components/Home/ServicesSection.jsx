import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Web App Development",
      description: "Build scalable, secure web applications tailored to your business needs.",
      image: "/images/web-dev.png"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
      image: "/images/mobile-dev.png"
    },
    {
      title: "BPO Service / Data Processing",
      description: "Professional business process outsourcing and data management solutions.",
      image: "/images/call-center.png"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50/50 py-12 md:py-14 overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base font-medium tracking-[0.3em] text-orange-600 uppercase mb-2"
          >
            What We Do
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-3 font-sans"
          >
            Our <span className="font-normal bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
        </motion.div>

        {/* 3 Cards Grid with Proper Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              className="relative bg-white/80 backdrop-blur-sm overflow-hidden shadow-lg border border-orange-100/50"
            >
              {/* Image */}
              <div className="relative h-44 lg:h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 lg:p-5">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-medium text-primary mb-2 font-sans">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-body font-light mb-4">
                  {service.description}
                </p>

                {/* Divider Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60px' }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.2 }}
                  className="h-[2px] bg-gradient-to-r from-orange-500 to-orange-600 mb-4"
                ></motion.div>

                {/* Learn More Link */}
                <button className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  Learn More
                  <HiArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;