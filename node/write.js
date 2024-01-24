const fs = require('fs');
const data = 'dara ]]bcsdbjq';

fs.writeFile('example.txt',data,(err)=>{
    if(err) throw err;
    console.log('data written');
})