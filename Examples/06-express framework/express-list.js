var express = require('express');

var app = express();

var books = require('./data/books').data;

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Book List'});
});

app.get('/books', function(req, res){
  res.render('books.ejs', {
    title: 'For Readers - Book List',
    books: books
  });
});
app.get('/books/:title', function(req, res) {
	res.send('<h1>' + req.params.title + '</h1>');
});

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);