// backend/middleware/upload.js
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// Store file in memory temporarily
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload to Cloudinary manually
const uploadToCloudinary = async (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'chennai-realty' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(fileBuffer);
  });
};

module.exports = { upload, uploadToCloudinary };