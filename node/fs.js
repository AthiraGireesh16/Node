const express = require('express')
const fs = require('fs');
const app = express();
app.get('/',(req,res)=>{
    fs.readFile("./array.txt","utf-8",(err,data)=>{
        if(err){
            console.log(content);
        }
        else{
            console.log(data);
        }
    });
    const content = "Hello world!"
    fs.writeFile("./array.txt", content,{flag: "a"},(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('File written');
        }
    })
    
    
})
app.listen(3000,(req,res)=>{
    console.log('Server is running')
});