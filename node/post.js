const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.method ==='POST'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('a post method');
    }
    else{
        res.writeHead(405,{'COntent-Type':'text/plain'});
        res.end('Not a post method');

    }
}).listen(4000,()=>{
    console.log('Server is runnning on the server 4000')
}
);