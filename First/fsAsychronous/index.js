const fs = require('fs');

fs.writeFileSync('bio.txt', 'hello m abhishek chaurasia :) ', (error) => {
    console.log('files is created');
});


fs.appendFileSync('bio.txt', 'plz like and shear M learnig Node JS', (err) => {
    console.log('task completed');
})

fs.readFile('bio.txt', 'UTF-8', (err, data) => {
    console.log(data);
})