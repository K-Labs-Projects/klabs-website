import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <footer className="relative bg-gray-900 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Left Side - Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-orange-500">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2">
              {quickLinks.map((link, index) => (
                <li 
                  key={index}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Contact Us with Globe */}
          <div className="flex items-start gap-6">
            {/* Contact Info */}
            <div className="flex-shrink-0">
              <h4 className="text-base font-semibold mb-4 text-orange-500">Contact Us</h4>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <FaEnvelope className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <a href="mailto:info@klabsindia.com" className="hover:text-orange-500 transition-colors">
                    info@klabsindia.com
                  </a>
                </div>

                <div className="flex items-start gap-3 text-gray-300 text-sm">
                  <FaMapMarkerAlt className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p>
                    C-11, Fourth Floor, C Wing,<br/>
                    602/442, Gemini Square (Parsn Manere),<br/>
                    Anna Salai, Chennai - 600 006
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all">
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all">
                  <FaTwitter className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all">
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all">
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Globe Image - Far Right */}
            <div className="hidden lg:block ml-auto">
              <img 
                src="/images/footer.png" 
                alt="Globe" 
                className="w-52 h-52 object-contain opacity-60"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar - Centered */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 text-xs text-gray-500">
            <p className="md:flex-1 text-center md:text-left">Copyright © 2026 K Labs Technology & Solutions</p>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
