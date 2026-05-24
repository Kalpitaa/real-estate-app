import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRuler, FaParking, FaSwimmingPool, FaDumbbell, FaWifi, FaHeart, FaShare, FaArrowLeft, FaEnvelope, FaPhone, FaUser, FaPaperPlane } from 'react-icons/fa';
import api from '../services/api';

// Sample property data (in real app, fetch from API)
const propertyData = {
  1: {
    id: 1,
    title: "Luxury Sea View Apartment",
    price: "₹2.5 Cr",
    location: "ECR, Chennai",
    bhk: "3 BHK",
    area: "1850 sq ft",
    description: "Experience luxury living in this stunning sea view apartment. Features modern amenities, premium finishes, and breathtaking ocean views.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
    ],
    bedrooms: 3,
    bathrooms: 2,
    area_sqft: 1850,
    yearBuilt: 2022,
    amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Club House", "Children's Play Area"],
    nearby: ["School (500m)", "Hospital (1km)", "Metro Station (800m)", "Mall (1.5km)"]
  },
  2: {
    id: 2,
    title: "Modern Family Villa",
    price: "₹4.2 Cr",
    location: "Anna Nagar, Chennai",
    bhk: "4 BHK",
    area: "3200 sq ft",
    description: "Beautiful modern villa with landscaped garden and premium amenities.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"
    ],
    bedrooms: 4,
    bathrooms: 3,
    area_sqft: 3200,
    yearBuilt: 2021,
    amenities: ["Garden", "Parking", "Security", "Smart Home", "Home Theater"],
    nearby: ["School (300m)", "Hospital (800m)", "Metro Station (600m)", "Park (200m)"]
  }
};

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showEnquiry, setShowEnquiry] = useState(false);
  
  // Enquiry form state
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [enquirySent, setEnquirySent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const property = propertyData[id] || propertyData[1];

  // Handle enquiry form input changes
  const handleEnquiryChange = (e) => {
    setEnquiryForm({ ...enquiryForm, [e.target.name]: e.target.value });
  };

  // Handle enquiry form submission
  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form
      if (!enquiryForm.name || !enquiryForm.email || !enquiryForm.phone) {
        alert('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }
      
      // Send to backend
      const response = await api.post('/enquiries', {
        ...enquiryForm,
        propertyId: property.id,
        propertyTitle: property.title
      });
      
      console.log('Enquiry submitted:', response.data);
      
      // Show success message
      setEnquirySent(true);
      
      // Reset form
      setEnquiryForm({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '' 
      });
      
      // Close the form after 2 seconds
      setTimeout(() => {
        setEnquirySent(false);
        setShowEnquiry(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 pb-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
        >
          <FaArrowLeft />
          Back to Properties
        </motion.button>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3">
              <img 
                src={property.images[selectedImage]} 
                alt={property.title}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-xl overflow-hidden ${selectedImage === idx ? 'ring-2 ring-blue-600' : ''}`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-32 object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <p className="text-gray-600 dark:text-gray-400">{property.location}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-red-100 transition-colors">
                    <FaHeart className="text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 transition-colors">
                    <FaShare className="text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                {property.price}
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200 dark:border-gray-700 mb-6">
                <div className="text-center">
                  <FaBed className="text-2xl text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">{property.bedrooms} Bedrooms</div>
                </div>
                <div className="text-center">
                  <FaBath className="text-2xl text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">{property.bathrooms} Bathrooms</div>
                </div>
                <div className="text-center">
                  <FaRuler className="text-2xl text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">{property.area_sqft} sq ft</div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">Description</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      {amenity === "Swimming Pool" && <FaSwimmingPool className="text-blue-600" />}
                      {amenity === "Gym" && <FaDumbbell className="text-blue-600" />}
                      {amenity === "Parking" && <FaParking className="text-blue-600" />}
                      {amenity === "WiFi" && <FaWifi className="text-blue-600" />}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Nearby Locations</h2>
                <div className="space-y-2">
                  {property.nearby.map((place, idx) => (
                    <div key={idx} className="text-gray-600 dark:text-gray-400">
                      • {place}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Agent Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Interested in this Property?</h3>
              
              {!showEnquiry ? (
                <>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <FaPhone className="text-blue-600" />
                      <span>Call us: +91 44 1234 5678</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <FaEnvelope className="text-blue-600" />
                      <span>Email: info@chennairealty.com</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setShowEnquiry(true)}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Enquire Now
                  </button>
                </>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  {enquirySent ? (
                    <div className="text-center py-4">
                      <div className="text-green-600 text-lg mb-2">✓</div>
                      <p className="text-green-600 font-semibold">Enquiry Sent Successfully!</p>
                      <p className="text-sm text-gray-500 mt-2">We'll contact you soon.</p>
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={enquiryForm.name}
                            onChange={handleEnquiryChange}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:border-blue-600"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={enquiryForm.email}
                            onChange={handleEnquiryChange}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:border-blue-600"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={enquiryForm.phone}
                            onChange={handleEnquiryChange}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:border-blue-600"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                        <textarea
                          name="message"
                          value={enquiryForm.message}
                          onChange={handleEnquiryChange}
                          rows="3"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:border-blue-600 resize-none"
                          placeholder="Any specific questions?"
                        />
                      </div>
                      
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setShowEnquiry(false)}
                          className="flex-1 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold disabled:opacity-50"
                        >
                          {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                        </button>
                      </div>
                    </>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;