const http = require ('http');

const server = http.createServer((req,res)=>{
    if (req.method === 'GET')  {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('HELLOOO');
    }
    else{
        res.writeHead(405,{'Content-Type':'text/plain'});
        res.end('Not Allowed');
    }
}).listen(3000);