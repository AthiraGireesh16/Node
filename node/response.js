const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body (requested resource)
  res.end('Hello, World!\n');
}).listen(3000);

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server listening on port 3000');
// });
