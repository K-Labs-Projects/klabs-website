import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import {
  HiOutlineShoppingBag,
  HiOutlineAcademicCap,
  HiOutlineScale,
  HiOutlineBuildingLibrary,
} from 'react-icons/hi2';

const IndustriesSection = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
useEffect(() => {
  if (videoRef.current) {
    videoRef.current.play().catch(() => {});
  }
}, []);
  const industries = [
    {
      icon: HiOutlineShoppingBag,
      title: 'Retail',
      description:
        'Streamline operations, enhance customer experiences, and drive growth with smart retail solutions.',
    },
    {
      icon: HiOutlineAcademicCap,
      title: 'Education',
      description:
        'Empower institutions with digital tools that transform learning, administration, and student engagement.',
    },
    {
      icon: HiOutlineScale,
      title: 'Legal',
      description:
        'Modernize legal workflows with secure document management, case tracking, and compliance automation.',
    },
    {
      icon: HiOutlineBuildingLibrary,
      title: 'Government',
      description:
        'Drive digital transformation in public services with scalable, secure, and citizen-centric platforms.',
    },
  ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2847 50%, #0a1e3d 100%)',
      }}
    >
    {/* Background Video */}
<video
  ref={videoRef}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20"
  src="/videos/industries.mp4"
/>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-3xl overflow-hidden"
        >
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl md:text-4xl lg:text-[42px] font-normal text-white leading-tight mb-4 font-bold"
          >
            Industries
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '60px' } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[2px] bg-gradient-to-r from-orange-500 to-orange-600 mb-4"
          />
         
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                className="group relative bg-white border border-gray-200 rounded-sm p-6 lg:p-7 flex flex-col justify-between min-h-[300px] hover:shadow-lg hover:border-orange-400 transition-all duration-300"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 leading-snug font-inter">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-6">
                  <button className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-200">
                    <HiArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;