const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');


// Set express config (key, value)
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log +'\n');

  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

// Express middleware
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

// req = request, res = response
app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');

  // res.send({
  //   name: 'Amber',
  //   likes: [
  //     'Minion',
  //     'Sandwich'
  //   ]
  // })

  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my world!',
  });
});

app.get('/about', (req, res) => {
  // res.send('About Page')
  res.render('about.hbs', {
    pageTitle: 'About Page',
  })
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects',
  });
});

// route: /bad, send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
