const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // res.status(200).send('Hello welcome to my world!');
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Super Man',
    age: 100
  }, {
    name: 'Super Woman',
    age: 100
  }, {
    name: 'Batman',
    age: 77
  }]);

});

app.listen(3000);

module.exports.app = app;
