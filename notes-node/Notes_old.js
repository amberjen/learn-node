console.log('Starting Notes.js');


// module.exports.age = 27;
// console.log(module);

// module.exports.addNote = function() {};

// Arrow Function
module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};

module.exports.add = (a, b) => {
  return a + b;
};
