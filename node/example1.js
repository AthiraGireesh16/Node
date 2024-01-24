
/*-----------------A normal file reading and displaying thedate----------------------*/
/*
const readline = require('readline');
const fs = require('fs');
let textIn = fs.readFileSync('./example.txt','utf-8');
console.log(textIn);

let content = `Data read from the file ${textIn}  Date created ${new Date()}`
fs.writeFileSync('./example.txt',content);
*/



/*-----------------Server creation and sending response by using express----------------------*/
/*
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello, World!');
});

const port = 3000;
app.listen(port,() => {
    console.log(`server is running on port ${port} `);
});
*/


/*------------------Reading an array and printing the even numbers from the array---------------------*/
/*
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/',(req,res)=>{
    let array = fs.readFileSync('./array.txt','utf-8').split(' ');
    let evenNumbers = array
        .filter((value)=>value%2==0)
        .join('  ');
        res.send(`Even numbers ${evenNumbers}`);
});

app.listen(3000,()=>{
    console.log("The server running on port 3000");
});
*/


/*-----------------File reading and writing asynchronously----------------------*/

const readline = require('readline');
const fs = require('fs');
fs.readFile('./array.txt','utf-8',(err,data)=>
{
    console.log(data);
})
console.log("The file reading...");
/*this line will print first due to the file reading is take more time to execute.
   so, it will execute on the back ground. the next line will execute on the single thread.
   after that the callback from the readFile module will execute in the single thread.

*/
