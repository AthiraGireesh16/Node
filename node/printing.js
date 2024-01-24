const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    const userName = req.query.age;
    // res.send(`The name is ${userName}`)
    console.log(`The name is  ${userName}`);
});

app.listen(4000,()=>{
    console.log("The server is running on port 4000");
});



