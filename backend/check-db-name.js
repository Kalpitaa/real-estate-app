const mongoose = require('mongoose');
require('dotenv').config();

async function checkDatabase() {
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI);
    
    await mongoose.connect(process.env.MONGO_URI);
    
    // Get database name
    const dbName = mongoose.connection.name;
    console.log(`\n📀 Connected to database: ${dbName}`);
    
    // List all collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\n📚 Collections in this database:');
    collections.forEach(col => {
      console.log(`   - ${col.name}`);
    });
    
    // Check contacts in this specific database
    const contactSchema = new mongoose.Schema({}, { strict: false });
    const Contact = mongoose.model('Contact', contactSchema);
    const contacts = await Contact.find();
    console.log(`\n📬 Contacts in ${dbName}: ${contacts.length}`);
    
    if (contacts.length > 0) {
      console.log('\nFirst contact:', contacts[0]);
    }
    
    await mongoose.disconnect();
    
  } catch (error) {
    console.error('Error:', error);
  }
}

checkDatabase();