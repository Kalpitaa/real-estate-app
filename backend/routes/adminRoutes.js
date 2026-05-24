const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Enquiry = require('../models/Enquiry');
const Property = require('../models/Property');

// Dashboard stats
router.get('/stats', async (req, res) => {
  try {
    const totalMessages = await Contact.countDocuments();
    const unreadMessages = await Contact.countDocuments({ status: 'unread' });
    const totalEnquiries = await Enquiry.countDocuments();
    const pendingEnquiries = await Enquiry.countDocuments({ status: 'pending' });
    const totalProperties = await Property.countDocuments();
    
    res.json({
      totalMessages,
      unreadMessages,
      totalEnquiries,
      pendingEnquiries,
      totalProperties
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all contact messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all enquiries
router.get('/enquiries', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;