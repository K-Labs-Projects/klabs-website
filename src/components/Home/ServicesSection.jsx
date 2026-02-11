import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Digital Transformation",
      description: "Modernize processes, platforms, and decision making at scale.",
      image: "/images/digital1.png",
      link: "/services/digital-transformation"
    },
    {
      title: "AI / ML Solutions",
      description: "Apply intelligence where it delivers real operational value.",
      image: "/images/digital3.png",
      link: "/services/ai-ml-solutions"
    },
    {
      title: "Data Science & Analytics",
      description: "Turn data into actionable insight and confident decisions.",
      image: "/images/digital4.png",
      link: "/services/data-science-analytics"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50/50 py-20 md:py-24 overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-14"
        >
          
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-3"
          >
            Our <span className="font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
        </motion.div>

        {/* 3 Cards Grid with Proper Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              className="relative bg-white/80 backdrop-blur-sm overflow-hidden shadow-lg border border-orange-100/50 group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-44 lg:h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 lg:p-5">
                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-primary mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-medium mb-4">
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
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-orange-500 transition-colors duration-200">
                  Learn More
                  <HiArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;