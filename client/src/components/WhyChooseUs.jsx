import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHandshake, FaChartLine, FaClock, FaUsers, FaAward } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Secure Transactions',
      description: '100% legal verification and secure payment gateways'
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Trusted Partners',
      description: 'Working with Chennai\'s top builders and developers'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Best ROI',
      description: 'High return on investment guaranteed properties'
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all queries'
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Expert Team',
      description: 'Professional real estate advisors with local expertise'
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: 'Award Winning',
      description: 'Recognized as Chennai\'s best real estate agency'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We provide exceptional service and expertise to help you find your perfect property
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;