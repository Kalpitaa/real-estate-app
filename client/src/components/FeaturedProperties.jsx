import React from 'react';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';

const properties = [
  {
    _id: 1,
    title: "Luxury Sea View Apartment",
    price: "₹2.5 Cr",
    location: "ECR, Chennai",
    bhk: "3 BHK",
    area: "1850 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    features: ["Sea View", "Pool", "Gym"]
  },
  {
    _id: 2,
    title: "Modern Family Villa",
    price: "₹4.2 Cr",
    location: "Anna Nagar, Chennai",
    bhk: "4 BHK",
    area: "3200 sq ft",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    features: ["Garden", "Parking", "Security"]
  },
  {
    _id: 3,
    title: "Tech Park Residency",
    price: "₹1.8 Cr",
    location: "OMR, Chennai",
    bhk: "3 BHK",
    area: "1650 sq ft",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    features: ["Smart Home", "Club House", "WiFi"]
  },
  {
    _id: 4,
    title: "Budget Friendly Apartment",
    price: "₹65 Lakhs",
    location: "Tambaram, Chennai",
    bhk: "2 BHK",
    area: "1050 sq ft",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80",
    features: ["Near Metro", "Park", "Market"]
  }
];

const FeaturedProperties = () => {
  return (
    <section id="featured" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-blue-600 bg-clip-text text-transparent">Properties</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in Chennai's most sought-after locations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={property._id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;