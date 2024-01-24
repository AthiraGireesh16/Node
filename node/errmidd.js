const express = require('express');
const app = express();

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.get('/', (req, res) => {
  throw new Error('Intentional error');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
