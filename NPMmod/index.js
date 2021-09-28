const chalk = require('chalk');
var validator = require('validator');

// console.log(chalk.bold.italic.bgCyan.red('Hello, Wolrd!'));

const res = validator.isEmail('Abhishek@Chaurasi.mom'); 
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));