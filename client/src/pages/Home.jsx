import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import UpcomingProjects from '../components/UpcomingProjects';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import StatsCounter from '../components/StatsCounter';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      <Hero />
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