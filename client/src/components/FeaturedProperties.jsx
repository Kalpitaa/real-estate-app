import React from 'react';
import { motion } from 'framer-motion';
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
            Featured <span className="text-blue-600 
            ">Properties</span>
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