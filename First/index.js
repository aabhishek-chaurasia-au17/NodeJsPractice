const fs = require('fs');

// creating a new file
fs.writeFileSync('read.txt', 'Welcome to my Home');

// fs.writeFileSync('read.txt', 'hi m Full Stack Developer , MERN Developer');

// fs.appendFileSync('read.txt', 'how r u m fine.')

// const buf_data = fs.readFileSync('read.txt');

// console.log(buf_data);

fs.renameSync("read.txt", "readwrite.txt");