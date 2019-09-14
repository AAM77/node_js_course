const validator = require('validator');
const getNotes = require('./notes.js');

console.log(getNotes());


console.log(validator.isEmail('adeel@example.com'));
console.log(validator.isURL('https://mead.io'));

// const addFunction = require('./utils.js');
//
// const sum = addFunction(4,-2);
// console.log(sum);
