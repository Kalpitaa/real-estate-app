const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Property = require('./models/Property');
const User = require('./models/User');

dotenv.config();

const sampleProperties = [
  {
    title: "Luxury Penthouse with Ocean View",
    slug: "luxury-penthouse-ocean-view",
    description: "Experience ultimate luxury in this stunning penthouse featuring panoramic ocean views, private elevator, and infinity pool.",
    price: 2500000,
    area: 3500,
    bedrooms: 4,
    bathrooms: 4.5,
    location: {
      address: "123 Coastal Drive",
      city: "Miami",
      state: "Florida",
      pincode: "33139"
    },
    images: [
      { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", publicId: "sample1" }
    ],
    amenities: ["Pool", "Gym", "Spa", "Private Cinema", "Wine Cellar", "Smart Home"],
    isFeatured: true,
    propertyType: "penthouse",
    yearBuilt: 2022
  },
  {
    title: "Modern Villa with Garden",
    slug: "modern-villa-garden",
    description: "Beautiful modern villa with landscaped garden, swimming pool, and state-of-the-art amenities.",
    price: 1800000,
    area: 4200,
    bedrooms: 5,
    bathrooms: 5,
    location: {
      address: "456 Green Valley",
      city: "Los Angeles",
      state: "California",
      pincode: "90210"
    },
    images: [
      { url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", publicId: "sample2" }
    ],
    amenities: ["Pool", "Garden", "Home Theater", "Smart Security"],
    isFeatured: true,
    propertyType: "villa",
    yearBuilt: 2021
  },
  {
    title: "Downtown Luxury Apartment",
    slug: "downtown-luxury-apartment",
    description: "Elegant apartment in the heart of downtown with city views and premium finishes.",
    price: 950000,
    area: 1800,
    bedrooms: 2,
    bathrooms: 2,
    location: {
      address: "789 City Center",
      city: "New York",
      state: "New York",
      pincode: "10001"
    },
    images: [
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", publicId: "sample3" }
    ],
    amenities: ["Concierge", "Fitness Center", "Rooftop Lounge", "Parking"],
    isFeatured: false,
    propertyType: "apartment",
    yearBuilt: 2020
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await Property.deleteMany();
    console.log('Cleared existing properties');
    
    // Insert sample data
    await Property.insertMany(sampleProperties);
    console.log('Sample properties added successfully');
    
    // Create admin user if not exists
    const adminExists = await User.findOne({ email: 'admin@luxuryrealestate.com' });
    if (!adminExists) {
      await User.create({
        name: 'Admin User',
        email: 'admin@luxuryrealestate.com',
        password: 'admin123',
        role: 'admin'
      });
      console.log('Admin user created (email: admin@luxuryrealestate.com, password: admin123)');
    }
    
    console.log('Database seeding completed!');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();