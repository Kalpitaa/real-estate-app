import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';
import { FaSearch, FaFilter } from 'react-icons/fa';

const properties = [
  {
    id: 1,
    title: "Luxury Sea View Apartment",
    price: "₹2.5 Cr",
    location: { city: "ECR", state: "Chennai" },
    bhk: "3 BHK",
    area: "1850",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702471/Orchid_Petals_Gurgaon___Luxury_Apartments_for_Rent_in_Sector_49_opvrty.jpg",
    features: ["Sea View", "Pool", "Gym"]
  },
  {
    id: 2,
    title: "Modern Family Villa",
    price: "₹4.2 Cr",
    location: { city: "Anna Nagar", state: "Chennai" },
    bhk: "4 BHK",
    area: "3200",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702451/Luxury_at_it_s_pick_cm56ob.jpg",
    features: ["Garden", "Parking", "Security"]
  },
  {
    id: 3,
    title: "Tech Park Residency",
    price: "₹1.8 Cr",
    location: { city: "OMR", state: "Chennai" },
    bhk: "3 BHK",
    area: "1650",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702450/Low_Rise_Apartments_in_Greater_Noida___Peaceful_Spacious_Living_logsul.jpg",
    features: ["Smart Home", "Club House", "WiFi"]
  },
  {
    id: 4,
    title: "Budget Friendly Apartment",
    price: "₹65 Lakhs",
    location: { city: "Tambaram", state: "Chennai" },
    bhk: "2 BHK",
    area: "1050",
    bedrooms: 2,
    bathrooms: 1,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779702427/Die_8_besten_Mehrfamilienhaus_Projekte_f%C3%BCr_Investoren_-_Grundiert_de_kyhmvs.jpg",
    features: ["Near Metro", "Park", "Market"]
  },
  {
    id: 5,
    title: "Penthouse with Terrace Garden",
    price: "₹5.5 Cr",
    location: { city: "Adyar", state: "Chennai" },
    bhk: "5 BHK",
    area: "4500",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779704085/7ca75998-2aeb-4787-86f4-f2d4ddebbd16_p6zkpj.webp",
    features: ["Terrace", "Jacuzzi", "Private Elevator"]
  },
  {
    id: 6,
    title: "Luxury Villa with Pool",
    price: "₹7.8 Cr",
    location: { city: "ECR", state: "Chennai" },
    bhk: "6 BHK",
    area: "6500",
    bedrooms: 6,
    bathrooms: 5,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779704085/1_3-5-scaled-e1723142534495-2048x1563-2_oipqzy.webp",
    features: ["Infinity Pool", "Home Theater", "Wine Cellar"]
  }
];

const Properties = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProperties = properties.filter(prop => {
    if (filter !== 'all' && prop.bhk !== filter) return false;
    if (search && !`${prop.location.city} ${prop.location.state}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-blue-600 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-4"
          >
            Premium Listings
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Our Properties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Discover our handpicked collection of premium properties across Chennai's finest locations
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white dark:bg-gray-800 shadow-md sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
            <div className="flex gap-2 flex-wrap">
              {['all', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '6 BHK'].map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === type
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {type === 'all' ? 'All Properties' : type}
                </motion.button>
              ))}
            </div>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 mb-6 text-sm"
          >
            Showing {filteredProperties.length} properties
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
          {filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🏠</div>
              <p className="text-gray-500 text-xl font-medium">No properties found</p>
              <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;