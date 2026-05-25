import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCheckCircle, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const upcomingProjects = [
  {
    id: 1,
    name: "Sunshine Towers",
    location: "OMR, Chennai",
    launchDate: "December 2025",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    type: "Luxury Apartments",
    units: "200+ Units"
  },
  {
    id: 2,
    name: "Green Valley Estates",
    location: "ECR, Chennai",
    launchDate: "March 2026",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    type: "Premium Villas",
    units: "150+ Villas"
  },
  {
    id: 3,
    name: "Metro Heights",
    location: "Velachery, Chennai",
    launchDate: "August 2025",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    type: "Smart Homes",
    units: "300+ Apartments"
  },
  {
    id: 4,
    name: "Riverside Residency",
    location: "Porur, Chennai",
    launchDate: "February 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    type: "Affordable Housing",
    units: "500+ Units"
  }
];

const UpcomingProjects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="bg-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Be the first to own these upcoming premium properties in Chennai
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-gray-800">
                  {project.type}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.name}
                </h3>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                  <FaMapMarkerAlt className="text-blue-500 mr-2 text-sm" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaCalendarAlt className="text-blue-500 mr-1 text-sm" />
                    <span className="text-xs">{project.launchDate}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaClock className="text-blue-500 mr-1 text-sm" />
                    <span className="text-xs">{project.units}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 mt-2 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
                >
                  Register Interest
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glassmorphism rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Why Invest in Chennai's Real Estate?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
              Chennai is one of India's fastest-growing real estate markets with excellent connectivity, 
              IT hubs, and world-class infrastructure. Invest now for the best returns!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['IT Corridor Growth', 'Excellent Connectivity', 'High ROI', 'Premium Lifestyle'].map((item) => (
                <div key={item} className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  <FaCheckCircle className="text-blue-500 text-sm" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingProjects;