// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.get('/', (req, res) => {
//     fs.readFile('./index.html', 'utf-8', (err, data) => {
//         if (err) {
//             res.status(500).send('Internal Server Error');
//             console.error(err);
//         } else {
//             res.status(200).send(data);
//         }
//     });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



const express = require('express');
const fs = require('fs');
const app = express();
app.get('/',(req,res)=>{
	fs.readFile('./index.html','utf-8',(err,data)=>{
	     if(err){
		res.status(500).send('Internal Server Error');	
			}

	     else{
		res.status(200).send(data);	
		}	
	});

	});
app.listen(4000,(req,res)=>{
	console.log("The server is running on port 4000")
	});
