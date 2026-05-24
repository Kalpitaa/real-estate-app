const mongoose = require('mongoose');
require('dotenv').config();

// Import model
const Contact = require('./models/Contact');

async function testSave() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected!\n');
    
    // Test data
    const testContact = new Contact({
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from script',
      status: 'unread'
    });
    
    console.log('Attempting to save...');
    const saved = await testContact.save();
    
    console.log('\n✅ SUCCESS! Contact saved:');
    console.log('   ID:', saved._id);
    console.log('   Name:', saved.name);
    console.log('   Email:', saved.email);
    console.log('   Created:', saved.createdAt);
    
    // Verify by counting
    const count = await Contact.countDocuments();
    console.log(`\n📊 Total contacts in database: ${count}`);
    
    await mongoose.disconnect();
    console.log('\n✅ Test complete!');
    
  } catch (error) {
    console.error('\n❌ ERROR:', error);
  }
}

testSave();