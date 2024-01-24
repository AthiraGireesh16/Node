const express = require('express');
const app = express();
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
  console.log('This middleware runs for requests to the router');
  next();
});

router.get('/', (req, res) => {
  res.send('Hello, Router!');
});

app.use('/myrouter', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
