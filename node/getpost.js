// const express = require('express');
// const app = express();
// const port = 4000;

// // Handling a GET request
// app.get('/', (req, res) => {
//   res.send('This is a GET request.');
// });

// // Handling a POST request
// app.post('/', (req, res) => {
//   let body = '';
//   req.on('data', (chunk) => {
//     body += chunk;
//   });

//   req.on('end', () => {
//     res.send(`Received POST data: ${body}`);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



// const express = require ('express');
// const app = express();
// const port = 4000;
 
// app.get('/',(req,res)=>{
//     res.send('This is a get method');
// });

// app.post('/',(req,res)=>
// {
//     let body = '';
//     req.on('data',(chunk)=>{
//         body+=chunk;
//     });
//     req.on('end',()=>{
//         res.send(`Received post data:${body}`);
//     });
// }).listen(4000,()=>{
// console.log('server is running on port 4000');
// });

const express = require('express');
const app = express();
const port = 4000;

// Handling a GET request
app.get('/', (req, res) => {
  res.send('This is a GET request.');
});

// Handling a POST request
app.post('/', (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    res.send(`Received POST data: ${body}`);
  });
});

// Handling a PUT request
app.put('/', (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    res.send(`Received PUT data: ${body}`);
  });
});

// Handling a DELETE request
app.delete('/', (req, res) => {
  res.send('This is a DELETE request.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
