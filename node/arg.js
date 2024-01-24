const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    // const userId = req.query.id;
    // const userName = req.query.name;
    // console.log(`ID:${userId}`);
    // console.log(`Name:${userName}`);
    const value = parseInt(req.query.value);
    if(value%2==0){
        res.send(`${value} is an even number`);
    }
    else{
        res.send(`${value} is an odd number`);
    }
});

app.listen(3000,()=>{
    console.log('server is running');
})