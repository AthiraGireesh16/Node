// const express = require ('express');
// const app = express();

// app.get('/:value',(req,res)=>{
//     const value = parseInt(req.params.value);
//     if(value%2==0){
//         res.send(`The number ${value} is even`);
//     }
//     else{
//         res.send(`The number ${value} is odd`);
//     }
// })

// app.listen(3000,()=>{
//     console.log('the server running on port 3000');
// })


const express = require('express');
const app = express();

app.get('/:value', (req, res) => {
    const value = req.params.value;

    if (value % 2 === 0) {
        res.send(`The number ${value} is even`);
    } else {
        res.send(`The number ${value} is odd`);
    }
});

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});
