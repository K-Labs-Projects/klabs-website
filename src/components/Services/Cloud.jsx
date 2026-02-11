import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiClipboardCheck, 
  HiCloud, 
  HiCube, 
  HiLightningBolt, 
  HiShieldCheck, 
  HiRefresh 
} from 'react-icons/hi';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const CloudDevOps = () => {
  const features = [
    {
      icon: <HiClipboardCheck className="w-7 h-7" />,
      title: 'Cloud Strategy & Readiness Assessment',
      description: 'Assess infrastructure, applications, and workloads to define the right cloud adoption and migration approach.',
    },
    {
      icon: <HiCloud className="w-7 h-7" />,
      title: 'Cloud Migration & Modernization',
      description: 'Migrate applications and data to cloud platforms using secure, phased, and low risk migration strategies.',
    },
    {
      icon: <HiCube className="w-7 h-7" />,
      title: 'Cloud Native Architecture',
      description: 'Design and implement cloud native solutions using microservices, containers, and modern frameworks.',
    },
    {
      icon: <HiLightningBolt className="w-7 h-7" />,
      title: 'DevOps Automation',
      description: 'Implement CI/CD pipelines, infrastructure automation, and configuration management to accelerate releases.',
    },
    {
      icon: <HiShieldCheck className="w-7 h-7" />,
      title: 'Reliability, Security & Cost Optimization',
      description: 'Ensure high availability, security controls, and cost efficiency through monitoring, optimization, and best practices.',
    },
    {
      icon: <HiRefresh className="w-7 h-7" />,
      title: 'Operations & Continuous Improvement',
      description: 'Provide ongoing monitoring, support, and continuous optimization to maintain performance and reliability.',
    },
  ];

  const whyKLabsItems = [
    {
      title: 'Designed for Scale & Stability',
      description: 'K Labs builds and operates digital services that remain stable under growth, complexity, and regulatory demands without compromising performance or security.',
    },
    {
      title: 'Value Driven Service Model',
      description: 'Our services are structured to solve real operational and business challenges, ensuring technology investments translate into measurable outcomes.',
    },
    {
      title: 'Strong Foundations, Modern Execution',
      description: 'We apply modern platforms, data, and AI with disciplined engineering to modernize systems while protecting continuity and reliability.',
    },
  ];

  const relatedServices = [
    {
      title: 'Digital Transformation',
      description: 'Modernize legacy systems and accelerate your digital journey with future-ready solutions.',
      image: '/images/digital1.png',
      link: '/services/digital-transformation',
    },
    {
      title: 'Product Engineering',
      description: 'End-to-end product development from ideation to deployment with scalable architecture.',
      image: '/images/digital2.png',
      link: '/services/product-engineering',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Turn raw data into actionable insights with advanced analytics and visualization.',
      image: '/images/digital4.png',
      link: '/services/data-science-analytics',
    },
    {
      title: 'AI / ML Solutions',
      description: 'Leverage artificial intelligence and machine learning to automate and innovate.',
      image: '/images/digital3.png',
      link: '/services/ai-ml-solutions',
    },
    {
      title: 'E-Governance & Enterprise Solutions',
      description: 'Scalable platforms for government departments and large-scale enterprise operations.',
      image: '/images/digital5.png',
      link: '/services/e-governance-enterprise',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        <img
          src="/images/digital6.png"
          alt="Cloud Services & DevOps"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-normal text-white font-bold mb-3">
              Cloud Services & DevOps
            </h1>
         
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
              Cloud services and DevOps at K Labs help organizations modernize infrastructure, accelerate deployments, and improve operational efficiency. Many enterprises face challenges with rigid infrastructure, slow release cycles, and high operational overhead.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
              K Labs enables cloud adoption and DevOps transformation by designing scalable architectures, automating delivery pipelines, and optimizing infrastructure while ensuring security, reliability, and cost control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Deliver Section - White Background */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3 font-semibold">
              What Cloud Services & DevOps Deliver at K Labs
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-orange-600" />
          </motion.div>

          {/* Feature Cards Grid - Cards on White Background */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-300 rounded-sm p-6 hover:border-orange-400 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 bg-orange-500/10 rounded-full mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <div className="text-orange-500 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3 font-inter group-hover:text-orange-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-normal text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why K Labs Section - Dark Background with Cards */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-gray-900 via-[#0d2847] to-gray-900">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-white mb-3 font-semibold">
              Why K Labs
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-orange-600" />
          </motion.div>

          {/* Why K Labs Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyKLabsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-sm p-6 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
              >
                {/* Orange accent bar */}
                <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-3 font-inter group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3 font-semibold">
              Related Services
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-orange-600" />
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <motion.a
                key={index}
                href={service.link}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-300 rounded-sm overflow-hidden hover:border-orange-400 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3 font-inter group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-normal text-sm">
                    {service.description}
                  </p>
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

export default CloudDevOps;