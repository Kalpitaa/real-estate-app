import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Anna Nagar, Chennai",
    rating: 5,
    text: "Excellent service! They helped me find my dream home within my budget. The team was very professional and guided me through every step.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "OMR, Chennai",
    rating: 5,
    text: "Best real estate experience I've ever had. Their property portfolio is impressive and the negotiation skills are outstanding.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Vikram Mehta",
    location: "ECR, Chennai",
    rating: 5,
    text: "Highly recommended! They made the entire process smooth and hassle-free. Got a great deal on my new apartment.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from our happy customers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-900 rounded-3xl p-8 md:p-12"
            >
              <FaQuoteLeft className="text-4xl text-blue-500 mb-6 opacity-50" />
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-blue-600' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;