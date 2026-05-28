import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaArrowRight, FaHome, FaBuilding, FaUsers, FaProjectDiagram } from 'react-icons/fa';

const slides = [
  {
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702471/Orchid_Petals_Gurgaon___Luxury_Apartments_for_Rent_in_Sector_49_opvrty.jpg",
    title: "Building Future",
    subtitle: "Landmarks",
    tag: "Est. 2010 · Premium Construction"
  },
  {
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702451/Luxury_at_it_s_pick_cm56ob.jpg",
    title: "Premium Family",
    subtitle: "Villas",
    tag: "Est. 2010 · Premium Construction"
  },
  {
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779704085/1_3-5-scaled-e1723142534495-2048x1563-2_oipqzy.webp",
    title: "Exclusive",
    subtitle: "Penthouses",
    tag: "Est. 2010 · Premium Construction"
  },
  {
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779704605/Casagrand-Casamia_vn20ly.jpg",
    title: "Smart Modern",
    subtitle: "Homes",
    tag: "Est. 2010 · Premium Construction"
  }
];

const stats = [
  { icon: <FaHome />, value: '10+', label: 'Years of Excellence' },
  { icon: <FaBuilding />, value: '50+', label: 'Projects Delivered' },
  { icon: <FaUsers />, value: '1000+', label: 'Happy Clients' },
  { icon: <FaProjectDiagram />, value: '12', label: 'Ongoing Projects' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-gray-900">

      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Added small pt-20 for subtle spacing from navbar */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 py-24 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Tag */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-widest uppercase mb-4"
            >
              {slides[currentSlide].tag}
            </motion.p>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                  {slides[currentSlide].title}
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight mb-6">
                  {slides[currentSlide].subtitle}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400 text-lg mb-4 max-w-lg leading-relaxed"
            >
              We design, engineer, and construct exceptional spaces that stand as testaments to innovation, craftsmanship, and timeless elegance.
            </motion.p>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-blue-600 opacity-80"></div>
                ))}
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">Trusted by 1000+ clients across Chennai</span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59,130,246,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg transition-all"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-xl font-semibold text-lg flex items-center gap-2 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                View Projects <FaArrowRight />
              </motion.button>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl border border-gray-100 dark:border-gray-700 max-w-lg"
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Search by location or project..."
                  className="flex-1 px-4 py-2 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold text-sm flex items-center gap-2"
                >
                  <FaSearch />
                  Search
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image - Small top margin for breathing room */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block mt-4"
          >
            {/* Main Image - Enhanced with premium shadow and border effects */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all duration-500 hover:shadow-[0_35px_60px_-15px_rgba(59,130,246,0.4)]">
              {/* Premium gradient border effect */}
              {/* <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 z-0">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-blue-600/30 blur-xl"></div>
              </div> */}
              {/* Animated border */}
            <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500 via-white to-blue-600 opacity-70 blur-sm z-0"
             />
            <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-[2px] rounded-3xl border-2 border-blue-400/50 z-0"
            />
              
              {/* Inner container for image */}
              <div className="relative rounded-3xl overflow-hidden z-1 bg-white dark:bg-gray-800">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-[600px] object-cover"
                  />
                </AnimatePresence>

                {/* Stats Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                >
                  <div className="grid grid-cols-4 gap-2">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-blue-400 flex justify-center mb-1 text-lg">{stat.icon}</div>
                        <div className="text-white font-bold text-xl">{stat.value}</div>
                        <div className="text-gray-400 text-xs leading-tight">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Slide dots */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.3 }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentSlide === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Mobile slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:hidden z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-400'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;