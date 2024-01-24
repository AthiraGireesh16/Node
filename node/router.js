const express = require('express');
const router = express.Router();

// Define routes using the router object
router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

// Export the router to use in other parts of your application
module.exports = router;
