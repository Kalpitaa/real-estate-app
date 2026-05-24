const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Middleware
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:3000','https://real-estate-app-phi-lilac.vercel.app',
    'null',
    null
  ],
  origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api', (req, res) => {
  res.json({ message: 'API is running', status: 'ok' });
});

// ✅ ADD THIS - Cloudinary test route
app.get('/api/test-cloudinary', async (req, res) => {
  const cloudinary = require('cloudinary').v2;
  cloudinary.config({
    cloud_name: 'dzgnkrxme',
    api_key: '689741519664287',      // ← paste your key
    api_secret: 'F1TGGKWXE2kYHfza3PU-6GQOGNk', // ← paste your secret
  });
  try {
    const result = await cloudinary.api.ping();
    res.json({ success: true, result });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/properties', require('./routes/propertyRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/enquiries', require('./routes/enquiryRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes'));
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log('MongoDB connection error:', err));