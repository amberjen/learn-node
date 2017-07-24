// let obj = {
//   name: 'Amber',
//   age: 27,
// };
//
// let stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);


// let personString = '{ "name": "Amber", "age": 27 }';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('./playground/notes.json', originalNoteString);

let noteString = fs.readFileSync('./playground/notes.json');
let note = JSON.parse(noteString);


console.log(typeof note);
console.log(note.title);
