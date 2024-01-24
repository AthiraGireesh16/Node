const express = require('express');
const app = express();

// Route to display a specific status code
app.get('/status/:code', (req, res) => {
    const statusCode = parseInt(req.params.code);

    if (!isNaN(statusCode) && statusCode >= 100 && statusCode < 600) {
        res.status(statusCode).send(`Response with status code: ${statusCode}`);
    } else {
        res.status(400).send('Invalid status code. Please provide a valid HTTP status code.');
    }
});

// Default route with a 404 status code
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});
