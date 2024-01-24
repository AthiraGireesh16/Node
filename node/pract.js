// const express = require('express');
// const app = express();

// // Define a route with a parameter
// app.get('/users/:userId', (req, res) => {
//   const userId = req.params.userId;
//   res.send(`User ID: ${userId}`);
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

// Use cookie-parser middleware to parse cookies
app.use(cookieParser());

// Use express-session middleware for managing sessions
app.use(
  session({
    secret: 'your-secret-key', // Change this to a strong and secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

// Routes
app.get('/', (req, res) => {
  // Access and modify session data
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }

  res.send(`Views: ${req.session.views}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
