var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile("./index.html","utf-8",function(err,data){
        res.write(data);
        console.log(data);
        res.end();
    })

}).listen(3000);


