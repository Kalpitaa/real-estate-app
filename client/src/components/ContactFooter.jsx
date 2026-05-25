import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import api from '../services/api';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    console.log('Submitting form data:', formData);
    
    try {
      // Send to backend
      const response = await api.post('/contact', formData);
      
      console.log('Backend response:', response.data);
      
      if (response.data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(response.data.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Error details:', err);
      console.error('Response:', err.response?.data);
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-400 resize-none"
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50"
              >
                <FaPaperPlane />
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-sm">No. 42, Anna Salai, Chennai - 600002</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm">+91 44 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm">info@chennairealty.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">ARKHE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building extraordinary spaces since 2008. Where vision meets craft and dreams become landmarks.
              </p>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Sustainability</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Press</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">SERVICES</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Residential</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Commercial</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Interior Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Smart Homes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Renovation</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">NEWSLETTER</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe for architecture insights and project announcements.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 text-sm"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <FaPaperPlane className="text-white text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © 2026 ARKHE Construction & Architecture. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;