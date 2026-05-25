import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: "Voora Aswin",
    location: "t.Nagar, Chennai",
    launchDate: "December 2025",
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779715743/Screenshot_2026-05-25_185802_d90ld9.png",
    type: "Luxury Apartments",
    units: "200+ Units",
    description: "Experience luxury living with world-class amenities and breathtaking views.",
    status: "Pre-Launch",
    price: "₹1.2 Cr onwards"
  },
  {
    id: 2,
    name: "Voora TRM Court",
    location: "Mylapore, Chennai",
    launchDate: "March 2026",
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779715745/Screenshot_2026-05-25_185818_jltofx.png",
    type: "Premium Villas",
    units: "150+ Villas",
    description: "Eco-friendly villas surrounded by lush greenery and modern amenities.",
    status: "Coming Soon",
    price: "₹3.5 Cr onwards"
  },
  {
    id: 3,
    name: "Voora Narayana",
    location: "Purasaiwakkam, Chennai",
    launchDate: "August 2025",
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779715745/Screenshot_2026-05-25_185831_jtc5oj.png",
    type: "Smart Homes",
    units: "300+ Apartments",
    description: "Smart homes with IoT integration and sustainable design.",
    status: "Pre-Launch",
    price: "₹85 Lakhs onwards"
  },
  {
    id: 4,
    name: "Voora Prakash",
    location: "T.Nagar, Chennai",
    launchDate: "February 2026",
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779715747/Screenshot_2026-05-25_185846_zxtudk.png",
    type: "Affordable Housing",
    units: "500+ Units",
    description: "Quality homes at affordable prices with excellent connectivity.",
    status: "Coming Soon",
    price: "₹45 Lakhs onwards"
  }
];

const UpcomingProjects = () => {
  return (
    <div className="pt-20 pb-12 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="relative bg-blue-600 py-24 overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-4"
          >
            Coming Soon
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Upcoming Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Be the first to own these premium properties — exclusive early bird offers available
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-lg">
                  {project.status}
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white/80 text-sm">Starting from</p>
                  <p className="text-white text-2xl font-bold">{project.price}</p>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.name}</h2>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span>{project.location}</span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-blue-50 dark:bg-gray-700 px-3 py-1 rounded-full">
                    <FaCalendarAlt className="text-blue-500 text-sm" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Launch: {project.launchDate}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 dark:bg-gray-700 px-3 py-1 rounded-full">
                    <FaClock className="text-blue-500 text-sm" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{project.units}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    <span className="text-xs text-gray-400">Property Type</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{project.type}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-200 transition-all"
                  >
                    Register Interest
                    <FaArrowRight size={12} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Invest Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 rounded-3xl p-10"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-2">Why Invest Early?</h3>
          <p className="text-white/70 text-center mb-8">Get the best deals before everyone else</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Early Bird Discounts up to 15%',
              'Higher ROI on Pre-Launch',
              'Flexible Payment Plans',
              'Premium Locations',
              'World-Class Amenities',
              'Trusted Builder Legacy'
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3"
              >
                <FaCheckCircle className="text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingProjects;