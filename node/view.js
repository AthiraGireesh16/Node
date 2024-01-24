const http = require ('http');
const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route that renders a view
app.get('/', (req, res) => {
  res.render('./index.html', { title: 'My Express App' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
