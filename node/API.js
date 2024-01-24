const express = require ('express');
const app = express();
const PORT = 3000;

const data =[
    { id:1, name: 'Item 1' },
    { id:2, name: 'Item 2' },
    { id:3, name: 'Item 3' },
];

app.get('/api/items',(req,res)=>{
    res.json(data);
});

app.get('/api/items',(req,res)=>{
    const itemid = parseInt(req.params.id);
    const item = data.find(item => item.id === itemid);

    if(item){
        res.json(item);
    } else {
        res.status(400).json({ error:'Item not found'});
    }
});

app.listen (PORT,()=>{
    console.log(`server running on the port ${PORT}`);
});