import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779717626/Die_8_besten_Mehrfamilienhaus_Projekte_f%C3%BCr_Investoren_-_Grundiert_de_pe7aml.jpg",
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

  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)} Cr`;
    return `₹${(price / 100000).toFixed(0)} Lakhs`;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold mb-2 tracking-widest text-sm uppercase"
          >
            Hand Picked Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured <span className="text-blue-600">Properties</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Discover our handpicked selection of premium properties in Chennai's most sought-after locations
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30'
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Properties Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  >
                    {formatPrice(property.price)}
                  </motion.div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {getPropertyCategory(property)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

                  {/* Details */}
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

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {property.features.slice(0, 2).map((feature, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </motion.span>
                    ))}
                    {property.features.length > 2 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        +{property.features.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 4px 15px rgba(59,130,246,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:hidden"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold"
          >
            View All Properties
            <FaArrowRight />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProperties;