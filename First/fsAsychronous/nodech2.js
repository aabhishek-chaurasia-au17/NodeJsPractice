const fs = require('fs');

// CRUD

// fs.mkdir('learnig', (err) => {
//     console.log('Folder Created');  
// })

// fs.writeFile('learnig/Practice.txt', ' Jai BajragBali ', (err) =>{
//     console.log('file Is created');
// })

// fs.appendFile('learnig/Practice.txt', ' Hello I am Becoming A Programmer', (err) => {
//     console.log('change');
// })

// fs.readFile('learnig/Practice.txt', 'utf-8', (err , data) => {
//     console.log(data);
// })


// fs.rename('./learnig/Practice.txt', './learnig/learnPractice.txt', (err) => {
//     console.log('file name change');
// })

// fs.unlink('./learnig/learnPractice.txt', (err) => {
//     console.log('deleted');
// })


fs.rmdir('./learnig', (err) => {
    console.log('folder deleted');
})