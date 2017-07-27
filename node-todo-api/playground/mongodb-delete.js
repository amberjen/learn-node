const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // *** deleteMany ***
  // db.collection('Todos').deleteMany({text: 'Eat sandwich'}).then((result) => {
  //   console.log(result);
  // });


  // *** deleteOne ***
  // Delete the first item match the criteria and then stop
  // db.collection('Todos').deleteOne({text: "Eat sandwich"}).then((result) => {
  //   console.log(result);
  // });


  // *** findOneAndDelete ***
  // Return which document has been deleted
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  // db.collection('Users').deleteMany({name: 'SuperHero #1'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5979550f71a97f81f0e60b01')}).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
})
