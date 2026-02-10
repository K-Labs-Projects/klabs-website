import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Client logos
  const clients = [
    { name: "Namma School Namma Ooru Palli", logo: "NSNOP.png" },
    { name: "Tamil Nadu Public Service Commission", logo: "TNLOGO.png" },
    { name: "Registrar of Co-operative Societies", logo: "RCS.png" },
    { name: "State Institute of Rural Development", logo: "TNLOGO.png" },
    { name: "Directorate of Collegiate Education", logo: "TNLOGO.png" },
    { name: "Department of School Education", logo: "TNLOGO.png" },
    { name: "Government of Tamil Nadu", logo: "TNLOGO.png" },
    { name: "Staff Selection Commission", logo: "SSC.png" },
    { name: "Sports Development Authority of Tamil Nadu", logo: "SDAT2.png" },
    { name: "Tamil Nadu Medical Services Corporation", logo: "tnmsc.png" },
    { name: "Tamil Nadu Corporation for Development of Women", logo: "TNCDW.jpg" },
    { name: "Adi Dravidar and Tribal Welfare Department", logo: "TNLOGO.png" },
    { name: "Medical Recruitment Board", logo: "TNLOGO.png" },
    { name: "Greater Chennai Police", logo: "GCP.png" },

    { name: "Kerala State Electronics Development Corporation Limited", logo: "KELTRON.jpg" },
  ];

  const totalSlides = Math.ceil(clients.length / 3);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentClients = () => {
    const startIndex = currentIndex * 3;
    return clients.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="relative py-10 md:py-12 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2847 50%, #0a1e3d 100%)' }}>
      
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left Side - Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/clients/client-bg.png)' }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>
            </div>

            {/* Content on Image */}
            <div className="relative z-10 h-full flex flex-col justify-center p-5 md:p-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 font-sans"
              >
                Clients
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '80px' } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-3"
              ></motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xs md:text-sm text-gray-200 leading-relaxed font-body font-light"
              >
                Clients – the foremost pillar of our success. 34+ full service govt. departments as clients, 38+ govt. departments using our solution frameworks, reaching out to millions of citizens across India.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Client Carousel */}
          <div className="relative px-8 md:px-10 ml-8 md:ml-12">
            
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-3 gap-3 md:gap-4"
                >
                  {getCurrentClients().map((client, index) => (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:bg-white/10 p-4"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center overflow-hidden p-2">
                          <img 
                            src={`/clients/${client.logo}`} 
                            alt={client.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">Logo</div>';
                            }}
                          />
                        </div>
                        <p className="text-[10px] md:text-xs text-gray-300 font-medium leading-tight line-clamp-2 group-hover:text-orange-400 transition-colors">
                          {client.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

    

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-orange-500 w-6'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientsSection;