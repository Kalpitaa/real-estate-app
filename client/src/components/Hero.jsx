import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

const slides = [
  {
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702471/Orchid_Petals_Gurgaon___Luxury_Apartments_for_Rent_in_Sector_49_opvrty.jpg",
    title: "Luxury Sea View",
    subtitle: "Apartments",
    location: "ECR, Chennai",
    tag: "New Launch"
  },
  {
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702451/Luxury_at_it_s_pick_cm56ob.jpg",
    title: "Premium Family",
    subtitle: "Villas",
    location: "Anna Nagar, Chennai",
    tag: "Ready to Move"
  },
  {
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779704085/1_3-5-scaled-e1723142534495-2048x1563-2_oipqzy.webp",
    title: "Exclusive",
    subtitle: "Penthouses",
    location: "Adyar, Chennai",
    tag: "Limited Units"
  },
  {
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779704605/Casagrand-Casamia_vn20ly.jpg",
    title: "Smart Modern",
    subtitle: "Homes",
    location: "OMR, Chennai",
    tag: "Pre-Launch"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-blue-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Rest of your existing content remains the same */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Find Your Dream{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Property
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Discover luxury homes, premium apartments, and exclusive villas in Chennai's most desirable locations
          </p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search by location, project, or keyword..."
                className="flex-1 px-6 py-3 bg-white/20 rounded-xl text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:border-blue-500"
              />
              <select className="px-6 py-3 bg-white/20 rounded-xl text-white border border-white/30 focus:outline-none">
                <option value="" className="bg-gray-700 text-white">Property Type</option>
                <option value="apartment" className="bg-gray-700 text-white">Apartment</option>
                <option value="villa" className="bg-gray-700 text-white">Villa</option>
                <option value="penthouse" className="bg-gray-700 text-white">Penthouse</option>
              </select>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <FaSearch />
                Search
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: '500+', label: 'Properties' },
              { value: '50+', label: 'Projects' },
              { value: '1000+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FaArrowRight className="text-white text-2xl rotate-90 opacity-70" />
      </motion.div>
    </section>
  );
};

export default Hero;