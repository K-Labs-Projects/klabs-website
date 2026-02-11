import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiLocationMarker, HiClock, HiBriefcase } from 'react-icons/hi';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = ['all', 'Engineering', 'Design', 'Product', 'Sales', 'Operations'];

  const jobListings = [
    {
      id: 1,
      title: '.NET Developer',
      location: 'Chennai/Coimbatore',
      type: 'Full-Time',
      experience: '3 to 7 years',
      department: 'Engineering',
    },
    {
      id: 2,
      title: 'PMO Executive',
      location: 'Chennai',
      type: 'Contract',
      experience: 'Fresher',
      department: 'Operations',
    },
    {
      id: 3,
      title: 'Senior React Developer',
      location: 'Chennai',
      type: 'Full-Time',
      experience: '5 to 8 years',
      department: 'Engineering',
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      location: 'Chennai/Remote',
      type: 'Full-Time',
      experience: '2 to 5 years',
      department: 'Design',
    },
    {
      id: 5,
      title: 'Product Manager',
      location: 'Chennai',
      type: 'Full-Time',
      experience: '4 to 7 years',
      department: 'Product',
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      location: 'Coimbatore',
      type: 'Full-Time',
      experience: '3 to 6 years',
      department: 'Engineering',
    },
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Image Banner */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Career opportunities at Klabs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Be part of something transformative
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Join Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why join Klabs?
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  What works with transforming is coming together as a group. We believe in team 
                  strength, and for that each one of you is important. Ours is a vibrant community of 
                  passionate people from diverse backgrounds. At Klabs, transformation happens at 
                  all layers beginning with you
                </p>
                <p className="text-base md:text-lg">
                  We have been transforming our people's professional journey over time which has 
                  helped us transform quicker towards our goals. As an organisation, we stand by our 
                  core values of Transparency, Trust, Togetherness, Honesty & Respect. Together let 
                  us digitally transform every organization that trusts and believes in our strengths and 
                  capabilities.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to join our team?
            </h2>
            <p className="text-lg text-gray-600">
              Explore open positions and find your next opportunity
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-wrap gap-3"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept === 'all' ? 'All Positions' : dept}
              </button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Left: Job Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <HiLocationMarker className="w-4 h-4 text-gray-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiBriefcase className="w-4 h-4 text-gray-400" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiClock className="w-4 h-4 text-gray-400" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Apply Button */}
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 group-hover:shadow-lg">
                      <span className="font-medium">Apply Now</span>
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Jobs Message */}
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                No positions available in this department at the moment.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't see a position that fits?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="px-8 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Submit Your Resume
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerPage;