const fs = require('fs');

const read = fs.readFile('bio.txt', 'UTF-8', (error, data) => {
    console.log(data);
})

console.log('Jai shree ram');