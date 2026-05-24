const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit contact form
router.post('/', async (req, res) => {
  console.log('📨 Contact form received at backend');
  console.log('Request body:', req.body);
  
  try {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      console.log('❌ Missing fields');
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }
    
    // Create new contact document
    const newContact = new Contact({
      name: name,
      email: email,
      message: message,
      status: 'unread'
    });
    
    // Save to database
    const savedContact = await newContact.save();
    
    console.log('✅ Contact SAVED to MongoDB!');
    console.log('   ID:', savedContact._id);
    console.log('   Name:', savedContact.name);
    console.log('   Email:', savedContact.email);
    console.log('   Created at:', savedContact.createdAt);
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt
      }
    });
    
  } catch (error) {
    console.error('❌ Error saving contact:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Get all contact messages
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    console.log(`📋 Retrieved ${messages.length} messages from database`);
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get single message by ID
router.get('/:id', async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mark message as read
router.put('/:id/read', async (req, res) => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: 'read' },
      { new: true }
    );
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete message
router.delete('/:id', async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;