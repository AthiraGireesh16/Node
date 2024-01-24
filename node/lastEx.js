// 1. Creation of server using http and diaplaying a page for / and /home otherwise displaying Page not found
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// var http = require("http");
// http.createServer((req,res)=>{
// 	let path = req.url;
// if(path==='/'|| path.toLowerCase()==='/home')
// {
//   	res.end("WELCOME");
// }
// else{
//  res.end("Page Not Found");
// }
// 	}).listen(4000);


// 2.  The same question using express
// ----------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();
// app.get(['/','/home'],(req,res)=>{
// 	res.send("HI HELLO WELCOME");	
// });


// app.get('*',(req,res)=>{
// 	res.send("SORRY SOMETHING WENT WRONG");
// });

// app.listen(3000,()=>{
// 	console.log("The server is running on port 3000");
// });


// 3.Printing name and age in the console and in the page by using Query
// --------------------------------------------------------------------------------------------------------


// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
// 	const name=req.query.name;
//     const age =req.query.age;
// 	console.log(`The user name is ${name} and age is ${age}`);
//     res.send(`The user name is ${name} and age is ${age}`)
// 	});
    
// app.listen(3000,()=>{
// 	console.log("server running on port number 3000");
// });




// 4.PARAMS example 
// --------------------------------------------------------------------------------------------------------



const express = require('express');
const app = express();
app.get('/:value',(req,res)=>{
	const value = req.params.value;
    console.log(`the value is ${value}`)
        if(value%2===0){
		console.log("The number is even ");	
         }
	else if(value%2===1){
		console.log("The number is not even")
		}
    else{
        console.log("Enter a valid number")
    }	
});
app.listen(3000,()=>{
	console.log("The server is running on port 3000")

});



// 5.File Reading
// --------------------------------------------------------------------------------------------------------


// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.get('/',(req,res)=>{
//     fs.readFile('./inde.html','utf-8',(err,data)=>{
//         if(err){
//             res.status(500).send('Internal Server Error');
//             console.log(err);
//         }
//         else{
//             res.status(200).send(data);
//             console.log(data);
//         }
//     })
// })

// app.listen(4000,(req,res)=>{
//     console.log('The server is running on 4000');
// })

// 6.ARRAY     ----   SQUARE OF ELEMENTS IN AN ARRAY
// --------------------------------------------------------------------------------------------------------



// const express = require('express');
// const fs = require('fs');
// const app = express();


// app.get('/',(req,res)=>{
//     fs.readFile('./array.txt','utf-8',(err,data)=>{
//     const array = data.split(' ').map(Number);
//     const square = array.map(element=>element*element);
//     res.send(square.join(' '));
//     })

// })
// app.listen(3000,(req,res)=>{
//     console.log("Server working");
// })


// 7.ARRAY     ----   THE SUM OF ARRAY ELEMENTS USING REDUCE
// --------------------------------------------------------------------------------------------------------


// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.get('/',(req,res)=>{
//     fs.readFile('./array.txt','utf-8',(err,data)=>{
//         if(err){
//             res.send('SOMETHING WENT WRONG!!!');
//         }
//         else{
//             const sum = data.split(' ').map(Number).reduce((acc,curr)=>acc+curr);
//             res.send(`The sum is ${sum}`);
//         }
//     })
// })
// app.listen(3000);








