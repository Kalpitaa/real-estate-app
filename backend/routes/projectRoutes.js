const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all projects' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create project' });
});

module.exports = router;