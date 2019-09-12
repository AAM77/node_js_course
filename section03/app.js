const fs = require('fs');

const msg = 'This file was created by Node.js. The file is meant to help understand the module system for fs commands.';
const appendedMsg = '\nThis is the appended message.'

// fs.writeFileSync('notes.txt', msg);
fs.appendFileSync('notes.txt', appendedMsg);
