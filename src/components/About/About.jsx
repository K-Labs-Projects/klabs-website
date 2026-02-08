import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: 1000,
      suffix: "+",
      title: "Digital Solutions Delivered",
      description: "Successfully developed and implemented solutions across web, mobile, and enterprise platforms."
    },
    {
      number: 17,
      suffix: "+",
      title: "Years of Proven Experience",
      description: "Backed by years of experience, delivering reliable solutions and lasting client relationships."
    },
    {
      number: 50,
      suffix: "+",
      title: "Trusted Customers",
      description: "Serving organizations across diverse industries and government sectors."
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/50 py-20 md:py-32 overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base font-medium tracking-[0.3em] text-orange-600 uppercase mb-4"
          >
            About Us
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-primary mb-6 font-sans"
          >
            Knowledge <span className="font-normal bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Empowers</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-body font-light"
          >
            We are a trusted technology partner with a strong track record of delivering innovative digital solutions that enable business transformation worldwide.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// Separate StatCard Component with Counter
const StatCard = ({ stat, index, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startValue = 0;
    const endValue = stat.number;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 16); // 60fps

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100/50"
    >
      {/* Gradient Border Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-orange-400/0 to-orange-300/0 group-hover:from-orange-500/10 group-hover:via-orange-400/10 group-hover:to-orange-300/10 transition-all duration-500"></div>
      
      <div className="relative z-10">
        {/* Number with Counter Animation */}
        <h3 className="text-5xl md:text-6xl lg:text-7xl font-light bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent mb-4 font-sans">
          {count.toLocaleString()}{stat.suffix}
        </h3>
        
        {/* Title */}
        <h4 className="text-xl md:text-2xl font-medium text-primary mb-3 font-sans">
          {stat.title}
        </h4>
        
        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-body font-light">
          {stat.description}
        </p>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          transition={{ duration: 0.8, delay: 0.9 + index * 0.2 }}
          className="h-[2px] bg-gradient-to-r from-orange-500 to-orange-600 mt-6"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default About;