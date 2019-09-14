const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

console.log(getNotes());


console.log(validator.isEmail('adeel@example.com'));
console.log(validator.isURL('https://mead.io'));
console.log(chalk.magenta.bgWhite('Hello world!'));
console.log(chalk.blue.bgYellow(validator.isURL('https://localhost:3000')));
console.log(chalk.green.dim.bold('Success!'))
console.log(chalk.green('I am a green line ' + chalk.blue.underline.bold('with a blue substring') + ' that becomes green again!'));

// const addFunction = require('./utils.js');
//
// const sum = addFunction(4,-2);
// console.log(sum);
