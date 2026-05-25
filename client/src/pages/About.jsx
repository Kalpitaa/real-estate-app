import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaStar, FaChartLine, FaUsers, FaAward, FaHome, FaPhoneAlt } from 'react-icons/fa';

const stats = [
  { value: '10+', label: 'Years of Excellence', icon: <FaAward /> },
  { value: '500+', label: 'Properties Sold', icon: <FaHome /> },
  { value: '1000+', label: 'Happy Families', icon: <FaUsers /> },
  { value: '50+', label: 'Expert Agents', icon: <FaPhoneAlt /> },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-blue-600/80 rounded-full text-white text-sm font-medium mb-6"
          >
            Since 2010
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About <span className="text-blue-400">ChennaiRealty</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Chennai's most trusted real estate platform with over a decade of excellence in helping families find their dream homes
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-3xl mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                Our Journey
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                Building Dreams Since 2010
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-lg">
                Founded in 2010, ChennaiRealty has grown to become one of Chennai's leading real estate platforms, helping thousands of families find their dream homes across the city.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                We combine deep local expertise with global standards to provide an unmatched property buying experience. Our team of experienced professionals guides you through every step of your property journey.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With over 500+ properties successfully sold and 1000+ happy clients, we continue to set new benchmarks in the Chennai real estate market.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Get In Touch
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Our Office"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-2xl shadow-xl">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-sm text-white/80">Years of Excellence</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-500">Properties Sold</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              What We Stand For
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaHandshake className="text-4xl" />, title: 'Integrity', desc: 'Complete transparency and honesty in every transaction we make' },
              { icon: <FaStar className="text-4xl" />, title: 'Excellence', desc: 'Striving for the highest quality in everything we do for you' },
              { icon: <FaChartLine className="text-4xl" />, title: 'Innovation', desc: 'Using cutting-edge technology to serve you better every day' },
              { icon: <FaBuilding className="text-4xl" />, title: 'Community', desc: 'Building lasting relationships and stronger communities together' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{value.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let our experts guide you to the perfect property in Chennai
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;