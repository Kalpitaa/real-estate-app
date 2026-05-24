const mongoose = require('mongoose');
require('dotenv').config();

// Simple schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  status: String,
  createdAt: Date
});

const Contact = mongoose.model('Contact', contactSchema);

async function viewData() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected!\n');
    
    // Get all contacts
    const contacts = await Contact.find();
    
    console.log(`📬 CONTACTS COLLECTION: ${contacts.length} messages\n`);
    
    if (contacts.length === 0) {
      console.log('No messages found. Submit a contact form first.');
    } else {
      contacts.forEach((contact, i) => {
        console.log(`Message ${i + 1}:`);
        console.log(`   Name: ${contact.name}`);
        console.log(`   Email: ${contact.email}`);
        console.log(`   Message: ${contact.message}`);
        console.log(`   Status: ${contact.status}`);
        console.log(`   Date: ${contact.createdAt}`);
        console.log('   ---');
      });
    }
    
    // Get all properties
    const Property = mongoose.model('Property', new mongoose.Schema({}, { strict: false }));
    const properties = await Property.find();
    
    console.log(`\n🏠 PROPERTIES COLLECTION: ${properties.length} properties\n`);
    properties.forEach((prop, i) => {
      console.log(`Property ${i + 1}: ${prop.title} - ${prop.price}`);
    });
    
    await mongoose.disconnect();
    console.log('\n✅ Done!');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

viewData();