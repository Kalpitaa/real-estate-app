import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';

const properties = [
  {
    id: 1,
    title: "Luxury Sea View Apartment",
    price: "₹2.5 Cr",
    location: "ECR, Chennai",
    bhk: "3 BHK",
    area: "1850 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    features: ["Sea View", "Pool", "Gym"]
  },
  {
    id: 2,
    title: "Modern Family Villa",
    price: "₹4.2 Cr",
    location: "Anna Nagar, Chennai",
    bhk: "4 BHK",
    area: "3200 sq ft",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    features: ["Garden", "Parking", "Security"]
  },
  {
    id: 3,
    title: "Tech Park Residency",
    price: "₹1.8 Cr",
    location: "OMR, Chennai",
    bhk: "3 BHK",
    area: "1650 sq ft",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    features: ["Smart Home", "Club House", "WiFi"]
  },
  {
    id: 4,
    title: "Budget Friendly Apartment",
    price: "₹65 Lakhs",
    location: "Tambaram, Chennai",
    bhk: "2 BHK",
    area: "1050 sq ft",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80",
    features: ["Near Metro", "Park", "Market"]
  },
  {
    id: 5,
    title: "Penthouse with Terrace Garden",
    price: "₹5.5 Cr",
    location: "Adyar, Chennai",
    bhk: "5 BHK",
    area: "4500 sq ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    features: ["Terrace", "Jacuzzi", "Private Elevator"]
  },
  {
    id: 6,
    title: "Luxury Villa with Pool",
    price: "₹7.8 Cr",
    location: "ECR, Chennai",
    bhk: "6 BHK",
    area: "6500 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    features: ["Infinity Pool", "Home Theater", "Wine Cellar"]
  }
];

const Properties = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProperties = properties.filter(prop => {
    if (filter !== 'all' && prop.bhk !== filter) return false;
    if (search && !prop.location.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Properties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Discover our collection of premium properties
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-3">
              {['all', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '6 BHK'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type === 'all' ? 'all' : type)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    filter === type 
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {type === 'all' ? 'All Properties' : type}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search by location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            />
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;