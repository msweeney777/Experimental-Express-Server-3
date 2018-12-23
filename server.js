const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'The Aran Islands'
  });
});

app.get('/Inishmore', (req, res) => {
  res.render('Inishmore.hbs', {
    pageTitle: 'Inishmore'
  });
});

app.get('/Inishmaan', (req, res) => {
  res.render('Inishmaan.hbs', {
    pageTitle: 'Inishmaan'
  });
});

app.get('/Inisheer', (req, res) => {
  res.render('Inisheer.hbs', {
    pageTitle: 'Inisheer'
  });
});

app.listen(3000, () => {
  console.log("Server up and running")
});
