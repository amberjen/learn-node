const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate(filter, update, options, callback)
  // Update one item and get document back
  // $set: Sets the value of a field in a document
  // returnOriginal: Default true. When false, returns the updated document rather than the original
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('59795e308f6e802bd8138157')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // $inc: Increments the value of the field by the specified amount
  db.collection('Users').findOneAndUpdate({
    _id: 1
  }, {
    $set: {
      name: 'Crazy Hero'
    },
    $inc: {
      age: 51
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
