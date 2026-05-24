const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  area: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  location: {
    address: String,
    city: String,
    state: String,
    pincode: String,
    coordinates: { lat: Number, lng: Number }
  },
  images: [{ url: String, publicId: String }],
  amenities: [String],
  status: { type: String, enum: ['available', 'sold', 'pending'], default: 'available' },
  isFeatured: { type: Boolean, default: false },
  propertyType: { type: String, enum: ['apartment', 'villa', 'penthouse', 'land', 'commercial'] },
  yearBuilt: Number,
  views: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);