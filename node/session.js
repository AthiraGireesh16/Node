const express = require('express');
const session = require('express-session');
const app = express();

// Use the session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Set up a simple route to set a session variable
app.get('/setUsername', (req, res) => {
    // Set a session variable
    req.session.username = 'John';

    res.send('Session username set!');
});

// Set up a route to retrieve and display the session variable
app.get('/getUsername', (req, res) => {
    // Retrieve the session variable
    const username = req.session.username;

    res.send(`Username: ${username || 'Not set'}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
