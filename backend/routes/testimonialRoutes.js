const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get testimonials' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create testimonial' });
});

module.exports = router;