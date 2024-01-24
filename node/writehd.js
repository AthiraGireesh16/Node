const http = require('http');

const server = http.createServer((req, res) => {
  // Set the status code and headers
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Custom-Header': 'SomeValue'
  });

  // Send a plain text response
  res.end('Hello, this is the server response!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
