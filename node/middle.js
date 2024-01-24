const express = require('express');
const app = express();

// Middleware function 1
const middleware1 = (req, res, next) => {
  console.log('Middleware 1');
  next();  // Call the next function in the chain
};

// Middleware function 2
const middleware2 = (req, res, next) => {
  console.log('Middleware 2');
  next();  // Call the next function in the chain
};

// Route handler
const routeHandler = (req, res) => {
  res.send('Hello World');
};

// Chain middleware and route handler
app.get('/', middleware2, middleware1, routeHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
