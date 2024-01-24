const fs = require('fs');

const filePath = 'example.txt';

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(`Error reading file stats: ${err.message}`);
    return;
  }

  console.log(`File Information for: ${filePath}`);
  console.log(`Size: ${stats.size} bytes`);
  console.log(`Is Directory: ${stats.isDirectory()}`);
  console.log(`Is File: ${stats.isFile()}`);
  console.log(`Permissions: ${stats.mode}`);
  console.log(`Last Access Time: ${stats.atime}`);
  console.log(`Last Modification Time: ${stats.mtime}`);
  console.log(`Last Change Time: ${stats.ctime}`);
});
