import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaMapMarkerAlt, FaHeart, FaArrowRight } from 'react-icons/fa';

const PropertyCard = ({ property, index }) => {
  console.log('Full property:', property);
  console.log('Images array:', property.images);
  console.log('Image URL:', property.images?.[0]?.url);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-56">
        <img
          //src={property.images?.[0]?.url || '/placeholder.jpg'}
          src={property.images?.[0].url || property.image || 'https://placehold.co/400x300?text=No+Image'}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-500 hover:text-white transition-colors">
          <FaHeart />
        </button>
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-blue-600 rounded-full text-white text-sm font-semibold">
          {property.bhk || property.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white line-clamp-1">
          {property.title}
        </h3>

        {/* ✅ FIXED - extract city and state from location object */}
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
          <FaMapMarkerAlt className="text-blue-500 mr-2 text-sm" />
          <span className="text-sm">
            {property.location?.city}, {property.location?.state}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FaBed className="mr-1 text-blue-500" />
              <span className="text-sm">{property.bedrooms || 3} Beds</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FaBath className="mr-1 text-blue-500" />
              <span className="text-sm">{property.bathrooms || 2} Baths</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-gray-500 dark:text-gray-400 text-xs">Area</span>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {property.area} sq.ft
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-gray-500 dark:text-gray-400 text-xs">Starting from</span>
            <p className="text-2xl font-bold bg-blue-600 bg-clip-text text-transparent">
              ₹{property.price?.toLocaleString('en-IN')}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2"
          >
            View Details
            <FaArrowRight size={12} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;