const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return  JSON.parse(notesString);
  } catch(err) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


let addNote = (title, body) => {

  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0 ) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }


};

let getAll = () => {
  return fetchNotes();
}

let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  console.log('Filtered Note:', filteredNotes);
  return filteredNotes[0];
};

let removeNote = (title) => {
  // fetch notes
  let notes = fetchNotes();

  // filter notes, removing the one with title of argument
  let filteredNotes = notes.filter((note) => note.title !== title);

  // save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;

}

let logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
