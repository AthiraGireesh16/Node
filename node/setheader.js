const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.setHeader('Custom-Header','Hello');

    res.end('Hello world');
}).listen(3000);