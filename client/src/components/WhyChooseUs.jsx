import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBuilding, FaUsers, FaClock, FaLeaf, FaMicrochip, FaHandshake, FaChartLine } from 'react-icons/fa';

const WhyChooseUs = () => {
  const stats = [
    {
      icon: <FaTrophy className="text-3xl" />,
      value: "15+",
      label: "Years of Excellence",
      sublabel: "Over landmark projects"
    },
    {
      icon: <FaBuilding className="text-3xl" />,
      value: "250+",
      label: "Projects Delivered",
      sublabel: "Relentless perfection"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      value: "100%",
      label: "Certified Engineers",
      sublabel: "Specialized expertise"
    },
    {
      icon: <FaClock className="text-3xl" />,
      value: "98%",
      label: "On-Time Completion",
      sublabel: "Project discipline"
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      value: "A+",
      label: "Sustainable Material",
      sublabel: "Finest quality sourced"
    },
    {
      icon: <FaMicrochip className="text-3xl" />,
      value: "Expert",
      label: "Team & Technology",
      sublabel: "Modern approach"
    }
  ];

  const trustFeatures = [
    "Expert Team",
    "Modern Technology",
    "Client First Approach"
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-600 font-semibold mb-2 tracking-wide">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Build On Trust <span className="text-blue-600">Driven By Excellence</span>
          </h2>
          
          {/* Trust Features Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                {stat.icon}
              </div>
              
              {/* Value */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
              >
                {stat.value}
              </motion.div>
              
              {/* Label */}
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                {stat.label}
              </h3>
              
              {/* Sublabel */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            View More →
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;