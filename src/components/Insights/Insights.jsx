import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Insights = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const blogsRef = useRef(null);
  const eventsRef = useRef(null);

  const tabs = [
    { id: 'blogs', label: 'Blogs', ref: blogsRef },
    { id: 'events', label: 'Events', ref: eventsRef },
  ];

  const handleTabClick = (tabId, ref) => {
    setActiveTab(tabId);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const blogCards = [
    {
      category: 'Digital Transformation',
      date: 'Jan 15, 2026',
      title: 'Digital Transformation for Government: turning operations into value',
      description: 'Government services once had a simple charter: keep systems running, meet SLAs, and fix issues before users notice them. But today\'s landscape demands more...',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      link: '#',
    },
    {
      category: 'Cloud & DevOps',
      date: 'Jan 10, 2026',
      title: 'Cloud Migration Strategies: seeing value, not just spend',
      description: 'Cloud spending used to be a technical metric. Today, it shapes business outcomes. Migration programs that rely on efficiency alone often miss broader...',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
      link: '#',
    },
    {
      category: 'AI & ML',
      date: 'Jan 5, 2026',
      title: 'What the Next Generation of AI Solutions Will Be Capable Of',
      description: 'Every generation of AI has expanded what machines can understand and automate. But the shift we\'re entering now is different from previous advances...',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      link: '#',
    },
  ];

  const eventCards = [
    {
      category: 'Conference',
      date: 'Feb 20, 2026',
      title: 'Tech Summit 2026: Innovation in Government Services',
      description: 'Join us for an immersive experience exploring the future of digital governance and citizen-centric service delivery...',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      link: '#',
    },
    {
      category: 'Webinar',
      date: 'Feb 15, 2026',
      title: 'Cloud Security Best Practices',
      description: 'Learn from industry experts about implementing robust security measures in your cloud infrastructure...',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80',
      link: '#',
    },
    {
      category: 'Workshop',
      date: 'Feb 10, 2026',
      title: 'AI/ML Implementation Workshop',
      description: 'Hands-on workshop covering practical AI and machine learning implementation strategies for enterprise applications...',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Video Banner */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/insights.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-normal text-white font-bold mb-3">
              Insights & Thoughts
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Tabs Section - Centered */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex justify-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.ref)}
                className={`px-6 py-4 text-sm md:text-base font-medium transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 border-transparent hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section ref={blogsRef} className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3 font-semibold">
              Latest Blogs & Insights
            </h2>
            <p className="text-gray-600 text-base font-medium">
              Expert perspectives on digital transformation and innovation
            </p>
          </motion.div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg hover:border-orange-400 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-600">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-blue-600 text-sm font-medium">
                      {card.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{card.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-gray-900 mb-3 font-inter group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-normal text-sm mb-4 line-clamp-3">
                    {card.description}
                  </p>

                  {/* Arrow Button */}
                  <div className="flex items-center justify-start">
                    <div className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-200">
                      <HiArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="bg-white py-12 md:py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3 font-semibold">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-base font-medium">
              Join us at our upcoming events and workshops
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg hover:border-orange-400 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-900 to-orange-600">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-orange-600 text-sm font-medium">
                      {card.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{card.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-gray-900 mb-3 font-inter group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-normal text-sm mb-4 line-clamp-3">
                    {card.description}
                  </p>

                  {/* Arrow Button */}
                  <div className="flex items-center justify-start">
                    <div className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-200">
                      <HiArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;