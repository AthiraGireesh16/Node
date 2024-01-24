const express = require('express');
const app = express();
app.get(['/','/home'],(req,res)=>{
   // if(path === '/' || path.toLowerCase()==='/home')
    {
        res.send('Hello, World!');
}

app.get('*',(req,res)=>{
    res.send("Page not found");
})    

});

const port = 3000;
app.listen(port,() => {
    console.log(`server is running on port ${port} `);
    console.log(__dirname);
    console.log('Hey this is end');
});