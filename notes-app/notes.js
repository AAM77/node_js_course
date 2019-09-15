const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

// loads notes from a file if it exists
// returns an empty array if it doesn't
const loadNotes = function () {
  try {

    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

  } catch (e) {
    return [];
  }
}

// takes in an argument notes &
// writes it to a file called notes.json
const saveNotes = function (notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
}


// Takes a title & body
// Adds note if title is not taken. Returns an error if it is.
// calls saveNotes()
const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length >= 1) {
    console.log(chalk.red('That title is already in use'))
  } else {
    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes);
  }
}





// exports the addNotes & getNotes functions
module.exports = {
  getNotes: getNotes,
  addNote: addNote
}
