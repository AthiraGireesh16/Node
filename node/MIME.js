const http = require('http');

const server = http.createServer((req, res) => {
  // Set the Content-Type header to indicate HTML content
  res.setHeader('Content-Type', 'text/html');

  // Send an HTML response
  const htmlContent = '<html><body><h1>Hello, MIME Types!</h1></body></html>';
  res.end(htmlContent);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
