import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import FeaturedProperties from '../components/FeaturedProperties';
import UpcomingProjects from '../components/UpcomingProjects';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import StatsCounter from '../components/StatsCounter';
import CTASection from '../components/CTASection';

const tickerItems = ['Luxury Villas', 'Commercial Projects', 'Interior Construction', 'Smart Homes', 'Renovation', 'Architecture', 'Premium Apartments', 'Sea View Properties'];

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Animated Ticker Bar - MOVED HERE (right after Hero) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 py-3 overflow-hidden relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-600 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blue-600 to-transparent z-10"></div>

        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1, color: '#bfdbfe' }}
              className="flex items-center gap-2 mx-8 text-white font-semibold text-sm uppercase tracking-wider cursor-default"
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                className="w-2 h-2 bg-white rounded-full inline-block"
              />
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* StorySection now comes AFTER the ticker bar */}
      <StorySection />
      <FeaturedProperties />
      <WhyChooseUs />
      <StatsCounter />
      <UpcomingProjects />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;