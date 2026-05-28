import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';
import { FaSearch, FaFilter, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';

const properties = [
  {
    id: 1,
    title: "Voora One Sea",
    price: "₹2.5 Cr",
    location: { city: "Next to Mayajal, ECR", state: "Chennai" },
    bhk: "2 & 3 BHK",
    area: "1850",
    bedrooms: "2 & 3",
    bathrooms: 2,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779714683/Voora_One-Seaecr_View6_19-04-25-1.jpg.bv_egfayx.webp",
    features: ["Sea View", "Pool", "Gym"]
  },
  {
    id: 2,
    title: "Voora Westside",
    price: "₹1 Cr",
    location: { city: "Manapakkam", state: "Chennai" },
    bhk: "2 & 3 BHK",
    area: "3200",
    bedrooms: "2 & 3",
    bathrooms: 3,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779714840/Untitled-design-70.png.bv_gfbph1.webp",
    features: ["Garden", "Parking", "Security"]
  },
  {
    id: 3,
    title: "Voora Agastya",
    price: "₹1.8 Cr",
    location: { city: "Tondiarpet", state: "Chennai" },
    bhk: "3 & 4BHK",
    area: "1650",
    bedrooms: "3 & 4",
    bathrooms: 2,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779714994/voora_agastya_z9gvhv.webp",
    features: ["Smart Home", "Club House", "WiFi"]
  },
  {
    id: 4,
    title: "Voora Highway Haven",
    price: "₹65 Lakhs",
    location: { city: "Panapakkam", state: "Kanchipuram" },
    bhk: "2 BHK",
    area: "1050",
    bedrooms: 2,
    bathrooms: 1,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779715150/highway_ocoy7b.webp",
    features: ["Near Metro", "Park", "Market"]
  },
  {
    id: 5,
    title: "Voora Beckford",
    price: "₹11 Cr",
    location: { city: "Nungambakkam", state: "Chennai" },
    bhk: "4 BHK",
    area: "4500",
    bedrooms: "4",
    bathrooms: 4,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779715244/beckford_qro7ps.webp",
    features: ["Terrace", "Jacuzzi", "Private Elevator"]
  },
  {
    id: 6,
    title: "Voora Ocean's27",
    price: "₹2.75 Cr",
    location: { city: "ECR", state: "Chennai" },
    bhk: "3 & 4 BHK",
    area: "6500",
    bedrooms: "3 & 4",
    bathrooms: 5,
    image: "https://res.cloudinary.com/dzgnkrxme/image/upload/v1779715364/ocean_fbotda.webp",
    features: ["Infinity Pool", "Home Theater", "Wine Cellar"]
  }
];

const Properties = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProperties = properties.filter(prop => {
    if (filter !== 'all' && !prop.bhk.includes(filter.replace(' BHK', ''))) return false;
    if (search && !`${prop.location.city} ${prop.location.state}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="relative bg-blue-600 py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
          >
            <FaTrophy className="text-yellow-400" />
            Premium Listings
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6"
          >
            Our Properties
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Discover our handpicked collection of premium properties across Chennai's finest locations
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 -mt-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
              <div className="flex gap-2 flex-wrap justify-center">
                {['all', '2', '3', '4'].map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(type === 'all' ? 'all' : `${type} BHK`)}
                    className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      filter === (type === 'all' ? 'all' : `${type} BHK`)
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {type === 'all' ? 'All Properties' : `${type} BHK`}
                  </motion.button>
                ))}
              </div>

              <div className="relative w-full lg:w-auto">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-11 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-80"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Showing <span className="text-blue-600 font-bold">{filteredProperties.length}</span> properties
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Chennai Metro Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
            >
              <div className="text-8xl mb-6">🏠</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">No properties found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
              <button
                onClick={() => { setFilter('all'); setSearch(''); }}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl font-medium"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Can't Find Your Dream Property?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Contact our experts for personalized assistance
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Properties;