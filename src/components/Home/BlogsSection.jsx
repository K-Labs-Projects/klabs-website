import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogs = [
    {
      image: '/images/web-dev.png',
      category: 'Web Development',
      date: 'Jan 15, 2026',
      title:
        'Building scalable government portals with modern React...',
    },
    {
      image: '/images/call-center.png',
      category: 'Mobile Development',
      date: 'Dec 20, 2025',
      title:
        'Cross-platform mobile solutions transforming enterprise workflows...',
    },
    {
      image: '/images/manpower.png',
      category: 'Data Processing',
      date: 'Nov 28, 2025',
      title:
        'Streamlining BPO operations with intelligent automation and AI...',
    },
  ];

  return (
    <section className="relative bg-white py-14 md:py-20 overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-sm md:text-base font-medium tracking-[0.3em] text-orange-600 uppercase mb-3"
            >
              Our Blogs
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-3xl md:text-4xl lg:text-[42px] font-light text-gray-900 leading-tight font-sans"
            >
              Where intelligence meets{' '}
              <span className="font-normal bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                real-world impact
              </span>
            </motion.h2>
          </motion.div>

          {/* View All Button */}
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-500 transition-colors duration-200 shrink-0"
          >
            View All Blogs
            <HiArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              className="group cursor-pointer bg-gray-50/80 border border-gray-200/60 rounded-sm p-4 hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 lg:h-60 overflow-hidden rounded-sm mb-5">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-orange-600 text-sm font-medium">
                  {blog.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="text-gray-500 text-sm">{blog.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-medium text-gray-900 leading-snug mb-4 group-hover:text-orange-500 transition-colors duration-300 font-sans">
                {blog.title}
              </h3>

              {/* Arrow */}
              <button className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-200">
                <HiArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;