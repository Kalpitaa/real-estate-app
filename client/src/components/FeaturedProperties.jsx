import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkerAlt, FaBed, FaBath, FaRuler } from 'react-icons/fa';
import PropertyCard from './PropertyCard';

const properties = [
  {
    _id: 1,
    title: "Luxury Sea View Apartment",
    price: 25000000,
    location: { city: "ECR", state: "Chennai" },
    bhk: "3 BHK",
    area: "1850",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702471/Orchid_Petals_Gurgaon___Luxury_Apartments_for_Rent_in_Sector_49_opvrty.jpg",
    features: ["Sea View", "Pool", "Gym"]
  },
  {
    _id: 2,
    title: "Modern Family Villa",
    price: 42000000,
    location: { city: "Anna Nagar", state: "Chennai" },
    bhk: "4 BHK",
    area: "3200",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702451/Luxury_at_it_s_pick_cm56ob.jpg",
    features: ["Garden", "Parking", "Security"]
  },
  {
    _id: 3,
    title: "Tech Park Residency",
    price: 18000000,
    location: { city: "OMR", state: "Chennai" },
    bhk: "3 BHK",
    area: "1650",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702450/Low_Rise_Apartments_in_Greater_Noida___Peaceful_Spacious_Living_logsul.jpg",
    features: ["Smart Home", "Club House", "WiFi"]
  },
  {
    _id: 4,
    title: "Budget Friendly Apartment",
    price: 6500000,
    location: { city: "Tambaram", state: "Chennai" },
    bhk: "2 BHK",
    area: "1050",
    bedrooms: 2,
    bathrooms: 1,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702427/Die_8_besten_Mehrfamilienhaus_Projekte_f%C3%BCr_Investoren_-_Grundiert_de_kyhmvs.jpg",
    features: ["Near Metro", "Park", "Market"]
  }
];

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Residential', 'Luxury', 'Budget'];
  
  const getPropertyCategory = (property) => {
    if (property.price >= 40000000) return 'Luxury';
    if (property.price <= 10000000) return 'Budget';
    return 'Residential';
  };

  const filteredProperties = activeTab === 'All' 
    ? properties 
    : properties.filter(p => getPropertyCategory(p) === activeTab);

  // Format price in Indian Rupees
  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    }
    return `₹${(price / 100000).toFixed(0)} Lakhs`;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header - Matching What We Build */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-600 font-semibold mb-2 tracking-wide">HAND PICKED COLLECTION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600">Properties</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Discover our handpicked selection of premium properties in Chennai's most sought-after locations
          </p>
          {/* <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Properties →
            <FaArrowRight className="text-sm" />
          </button> */}
        </motion.div>

        {/* Tabs - Matching What We Build */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30'
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Properties Grid - Card Style Matching What We Build */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {formatPrice(property.price)}
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {getPropertyCategory(property)}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm mb-3">
                  <FaMapMarkerAlt className="text-blue-500 text-xs" />
                  <span>{property.location.city}, {property.location.state}</span>
                </div>
                
                {/* Property Details */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                    <FaBed className="text-blue-500" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                    <FaBath className="text-blue-500" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                    <FaRuler className="text-blue-500" />
                    <span>{property.area} sq.ft</span>
                  </div>
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {property.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {property.features.length > 2 && (
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                      +{property.features.length - 2}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button Mobile - Matching What We Build */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:hidden"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold">
            View All Properties
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;