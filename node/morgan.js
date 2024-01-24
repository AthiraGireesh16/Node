const express = require('express');
const morgan = require('morgan');

const app = express();

// Use morgan as external middleware
app.use(morgan('dev'));

// Your routes and other middleware go here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
