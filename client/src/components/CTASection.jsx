import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-900 mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect property that matches your lifestyle and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
            >
              <FaPhone />
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-100 text-gray-800 rounded-xl font-semibold flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-200 transition-colors"
            >
              <FaEnvelope />
              Contact Us Now
            </motion.button>
          </div>
          <p className="text-gray-500 dark:text-gray-500 mt-6">
            Or call us directly: <span className="text-blue-600 font-semibold">+91 44 1234 5678</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;