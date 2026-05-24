const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required']
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  message: { 
    type: String, 
    required: [true, 'Message is required']
  },
  status: { 
    type: String, 
    enum: ['unread', 'read', 'replied'], 
    default: 'unread' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Use existing model or create new one
module.exports = mongoose.models.Contact || mongoose.model('Contact', contactSchema);