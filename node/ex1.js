const http = require("http");

http.createServer((req,res) => {
    res.write("WELCOME");
    res.end();

}).listen(3000);