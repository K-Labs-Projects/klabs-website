import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'About Us', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Industries', href: '#industries' },
    { title: 'Insights', href: '#insights' },
    { title: 'Careers', href: '#careers' },
    { title: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 font-body ${
        scrolled
          ? 'bg-white/98 shadow-lg backdrop-blur-md'
          : 'bg-white/95 shadow-md backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4 lg:py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src="/logo.png"
              alt="Company Logo"
              className="h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleMenuClick(item.href)}
                className="relative text-primary font-medium text-[15px] tracking-wide py-2 transition-colors duration-300 hover:text-orange-500 group"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-primary hover:text-orange-500 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-1">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleMenuClick(item.href)}
                    className="w-full text-left block text-primary font-medium text-base py-3 px-4 rounded-lg border-b border-gray-50 transition-all duration-300 hover:bg-orange-50 hover:text-orange-500 hover:pl-6"
                  >
                    {item.title}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;