const express = require('express');
const app = express();

// Define a route with a route parameter
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
