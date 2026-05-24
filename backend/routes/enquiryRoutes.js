const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// Submit property enquiry
router.post('/', async (req, res) => {
  try {
    const { propertyId, propertyTitle, name, email, phone, message } = req.body;
    
    const enquiry = new Enquiry({
      propertyId,
      propertyTitle,
      name,
      email,
      phone,
      message
    });
    
    await enquiry.save();
    
    console.log('New property enquiry:', { propertyTitle, name, email });
    
    res.status(201).json({ 
      success: true,
      message: 'Enquiry submitted successfully',
      data: enquiry
    });
  } catch (error) {
    console.error('Enquiry error:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get enquiries for a property
router.get('/property/:propertyId', async (req, res) => {
  try {
    const enquiries = await Enquiry.find({ propertyId: req.params.propertyId });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;