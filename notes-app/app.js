const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

// create add command

// add, remove, read, list notes

const command = process.argv[2];
const argv = yargs.argv;

if (command === 'add') {
  console.log('Adding note...');
} else if (command === 'remove') {
  console.log('Removing note...');
} else if (argv.title) {
  if (argv.title === 'Happy Days') {
    console.log(chalk.green('Happy Success!!'));
  }
}

console.log(process.argv);
console.log(yargs.argv);
