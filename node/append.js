const fs = require('fs');

const dataToAppend = 'This data will be appended to the file.\n';

fs.appendFile('example.txt', dataToAppend, (err) => {
  if (err) throw err;
  console.log('Data appended to file!');
});
