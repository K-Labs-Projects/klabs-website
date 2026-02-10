import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "Technology that empowers growth",
    "Solutions built with purpose",
    "Driven by knowledge and insight",
    "Engineered for reliability",
    "Focused on real business outcomes",
    "Tailored for your needs",
 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Elegant Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl w-full text-center">
          
          {/* Animated Text with Gradient */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide leading-tight font-sans bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white animate-gradient-x"
              style={{ 
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                letterSpacing: '0.02em',
                backgroundSize: '200% auto',
              }}
            >
              {slides[currentSlide]}
            </motion.h1>
          </AnimatePresence>
          
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          key={currentSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4.5, ease: 'linear' }}
          className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        ></motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;