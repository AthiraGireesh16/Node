var url = require("url");
var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {
    var parsed = url.parse(req.url);

    fs.readFile("." + parsed.pathname, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("Error: Page not found");
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Set the response header
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   // Send the response body (requested resource)
//   res.end('Hello, World!\n');
// }).listen(3000);

// // server.listen(3000, () => {
// //   console.log('Server listening on port 3000');
// // });
