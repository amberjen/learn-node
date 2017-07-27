// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

// ES6 Destructure
// let user = { name: 'SuperHero', age: 27};
// let { name } = user;
// console.log(name);

// (url, callback)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // (name of collection )
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   compeleted: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users(name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'SuperHero #1',
  //   age: 27,
  //   location: 'blackhole'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert user');
  //   }
  //
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });






  db.close();
});
