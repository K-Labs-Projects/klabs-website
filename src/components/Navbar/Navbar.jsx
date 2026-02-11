import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const menuItems = [
    { title: 'About Us', href: '/about', isRoute: true },
    { title: 'Services', href: '/services', isRoute: true },
    { title: 'Industries', href: '/industries', isRoute: true },
    { title: 'Insights', href: '/insights', isRoute: true },
    { title: 'Careers', href: '/careers', isRoute: true },
    { title: 'Contact Us', href: '/contactus', isRoute: true },
  ];
const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleMenuClick = (href, isRoute) => {
    setMobileMenuOpen(false);
    if (isRoute) {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getNavbarClasses = () => {
    if (hovered) {
      return 'bg-white/95 shadow-lg backdrop-blur-md';
    }
    if (scrolled) {
      return 'bg-white/20 shadow-md backdrop-blur-lg border-b border-white/20';
    }
    return 'bg-transparent';
  };

  return (
    <nav
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 font-body ${getNavbarClasses()}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-2 lg:py-2.5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src="/logo.png"
              alt="Company Logo"
              className="h-8 md:h-10 lg:h-11 w-auto object-contain"
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
                onClick={() => handleMenuClick(item.href, item.isRoute)}
                className="relative text-orange-500 font-medium text-[15px] tracking-wide py-2 transition-colors duration-300 hover:text-orange-600 group"
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
          className="lg:hidden p-2 text-orange-500 transition-colors duration-300 hover:text-orange-600"
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
                    onClick={() => handleMenuClick(item.href, item.isRoute)}
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