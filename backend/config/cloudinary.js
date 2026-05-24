const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
  cloud_name: 'dzgnkrxme',
  api_key: '689741519664287',     // ← Root API Key
  api_secret: 'F1TGGKWXE2kYHfza3PU-6GQOGNk', // ← Root API Secret
});

console.log('✅ Cloudinary cloud name:', cloudinary.config().cloud_name);

const upload = multer({ storage: multer.memoryStorage() });

module.exports = { cloudinary, upload };