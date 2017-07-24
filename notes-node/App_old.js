console.log('Starting App.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./Notes.js');

console.log(_.isString(true));
console.log(_.isString('ABC'));
console.log(_.uniq(['c','a','b',2,2,1,0,7,1,1,7,'c','b','a']));

// console.log('Result: ', notes.add(2,3));

// let user = os.userInfo();
// console.log(user);

// let result = notes.addNote();
// console.log(result);

// Method 1
// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!');

// ES6
// fs.appendFile('greetings.txt', `Hello ${user.username}, ${notes.age} !`);
