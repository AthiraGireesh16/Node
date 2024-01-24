const express = require('express');
const app = express();

app.get('/search',(req,res)=>{
    const searchQuerry = req.query.query;
    const page = req.query.page;
    const num = req.query.num;
    const sum = page+num;
    res.send(`Search query :${searchQuerry} page:${page} Number : ${num} sum : ${sum}`);
});

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})