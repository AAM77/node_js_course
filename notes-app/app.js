// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');


// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },

    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      decribe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// create list command

yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler() {
    console.log(chalk.green('Listing all notes...'));
    notes.listNotes();
  }
})

// create read command

yargs.command({
  command: 'read',
  describe: 'Read the note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse()
// add, remove, read, list notes
// console.log(yargs.argv);


// if (command === 'add') {
//   console.log('Adding note...');
// } else if (command === 'remove') {
//   console.log('Removing note...');
// } else if (argv.title) {
//   if (argv.title === 'Happy Days') {
//     console.log(chalk.green('Happy Success!!'));
//   }
// }
//
// console.log(process.argv);
// console.log(yargs.argv);
