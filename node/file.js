var fs = require('fs');

fs.readFile("./sample.txt", "utf-8", function(err, data) {
    if (err) {
        console.error(err); // Log the error to the console
    } else {
        console.log(data); // Log the data to the console
    }
});