import React from 'react';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiUserGroup, HiLightningBolt, HiChartBar, HiCog } from 'react-icons/hi';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: 'Security First Approach',
      description: 'We prioritize data security and system reliability in every solution we build.',
    },
    {
      icon: <HiUserGroup className="w-8 h-8" />,
      title: 'Customer Commitment',
      description: 'Every client is supported by a dedicated technical team ensuring personalized service and continuous support.',
    },
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: 'Rapid Response',
      description: 'Our 24/7 IT helpdesk ensures an average response time of five minutes or less.',
    },
    {
      icon: <HiChartBar className="w-8 h-8" />,
      title: 'Proactive Service',
      description: 'We actively monitor, maintain, and optimize systems to prevent issues before they occur.',
    },
    {
      icon: <HiCog className="w-8 h-8" />,
      title: 'End-to-End Expertise',
      description: 'Our in-house teams, including structured cabling and infrastructure specialists, allow us to deliver projects of any scale efficiently.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Image Banner - Dark */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        <img
          src="/images/AboutUs.png"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-normal text-white font-bold"
          >
            About Us
          </motion.h1>
        </div>
      </div>

    {/* Introduction Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-semibold">
              Knowledge <span className="font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Empowers</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-600 leading-relaxed text-base font-medium mb-4"
          >
            <p>
              <span className="text-orange-500 font-semibold">K Labs Technology & Solutions Private Limited</span> is a technology-driven organization dedicated to delivering secure, scalable, and innovative IT solutions. With a strong presence across India, especially in Tamil Nadu, K Labs has built a reputation for successfully executing complex and high-impact projects, including several government initiatives.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 leading-relaxed text-base font-medium"
          >
            <p>
              We specialize in aligning business needs with advanced technology solutions, helping organizations transform digitally while maintaining reliability, security, and performance. Our commitment to quality, fast response, and problem-solving excellence has enabled us to become a trusted technology partner for clients across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story & Mission/Vision Combined */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4 text-center font-semibold">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed text-base font-medium mb-3">
              <span className="text-orange-500 font-semibold">K Labs</span> was founded with a vision to take on challenging technological problems and convert them into effective, practical solutions. Over the years, we have consistently delivered projects that demand precision, scalability, and strong security standards.
            </p>
            <p className="text-gray-600 leading-relaxed text-base font-medium">
              Our experience working with government bodies, enterprise clients, and large-scale operations has helped us develop robust systems that meet real-world demands. With branches across major districts of Tamil Nadu and key locations in India, K Labs continues to expand its technological and operational footprint.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border-l-4 border-orange-500 pl-6"
            >
              <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 font-inter">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-base font-medium">
                To deliver secure, reliable, and scalable technology solutions that empower organizations to achieve operational excellence and digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border-l-4 border-orange-500 pl-6"
            >
              <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 font-inter">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-base font-medium">
                To become a globally recognized IT solutions provider known for innovation, security-first development, and customer-centric service delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3 font-semibold">
              Our Values
            </h2>
            
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <div className="text-orange-500 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3 font-inter">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-normal text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different & Innovation */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 text-center mb-4 font-semibold">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 leading-relaxed text-base font-medium">
              <span className="text-orange-500 font-semibold">K Labs</span> adapts quickly to evolving business environments by adopting transparent, goal-oriented workflows. We focus on delivering high-quality, secure, and scalable solutions within committed timelines. Along with customized development services, we also offer ready-to-deploy solutions that can be tailored to specific client requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-center text-gray-900 mb-4 font-semibold">
              Innovation & Technology Focus
            </h2>
            <p className="text-gray-600 leading-relaxed text-base font-medium">
              <span className="text-orange-500 font-semibold">K Labs</span> recognizes the growing importance of Geo-Informatics and has successfully developed applications using geospatial analysis and visualization technologies. By integrating geocomputation, database systems, networking, and user interface technologies, we ensure reliable data-driven decision-making solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Social Responsibility */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-center text-gray-900 mb-4 font-semibold">
              Corporate Social Responsibility
            </h2>
            <p className="text-gray-600 leading-relaxed text-base font-medium">
              At <span className="text-orange-500 font-semibold">K Labs</span>, we strongly believe in giving back to society. We actively participate in social initiatives and community development programs. One of our notable contributions includes supporting government school students by sponsoring essential resources and participating in educational development initiatives, earning appreciation from the Tamil Nadu Government.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Presence */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl text-center font-normal text-white mb-4 font-semibold">
              Our Presence
            </h2>
            <p className="text-gray-300 leading-relaxed text-base font-medium">
              <span className="text-orange-500 font-semibold">K Labs</span> operates across multiple districts in Tamil Nadu and continues expanding into major states across India, delivering reliable IT solutions and services to a wide range of industries.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;