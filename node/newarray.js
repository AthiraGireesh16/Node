const express = require("express");
const app = express();
const newarray = require("./newarray");
const port = 3001;
app.set('View engine','ejs');
let num
let array = [1,2,3,4,5]
let newarray = array.map(num=>num*num)
app.get ('/',(req,res)=>{
    res.render('array',{newarray:newarray})
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
    })
})