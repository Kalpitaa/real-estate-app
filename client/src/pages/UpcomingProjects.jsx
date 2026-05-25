import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: "Sunshine Towers",
    location: "OMR, Chennai",
    launchDate: "December 2025",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    type: "Luxury Apartments",
    units: "200+ Units",
    description: "Experience luxury living with world-class amenities and breathtaking views.",
    status: "Pre-Launch"
  },
  {
    id: 2,
    name: "Green Valley Estates",
    location: "ECR, Chennai",
    launchDate: "March 2026",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    type: "Premium Villas",
    units: "150+ Villas",
    description: "Eco-friendly villas surrounded by lush greenery and modern amenities.",
    status: "Coming Soon"
  },
  {
    id: 3,
    name: "Metro Heights",
    location: "Velachery, Chennai",
    launchDate: "August 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    type: "Smart Homes",
    units: "300+ Apartments",
    description: "Smart homes with IoT integration and sustainable design.",
    status: "Pre-Launch"
  },
  {
    id: 4,
    name: "Riverside Residency",
    location: "Porur, Chennai",
    launchDate: "February 2026",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    type: "Affordable Housing",
    units: "500+ Units",
    description: "Quality homes at affordable prices with excellent connectivity.",
    status: "Coming Soon"
  }
];

const UpcomingProjects = () => {
  return (
    <div className="pt-20 pb-12 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-blue-600 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Upcoming Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Be the first to own these premium properties
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                  {project.status}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span>{project.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" />
                    <span className="text-sm">Launch: {project.launchDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    <span className="text-sm">{project.units}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="text-sm text-gray-500">Property Type</span>
                    <p className="font-semibold">{project.type}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold"
                  >
                    Register Interest
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Why Invest in Upcoming Projects?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Early Bird Discounts', 'Higher ROI', 'Flexible Payment Plans', 'Premium Locations', 'Modern Amenities', 'Trusted Builders'].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingProjects;