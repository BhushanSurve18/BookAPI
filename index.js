const express = require('express');
const { resolve } = require('path');
const { getAllBooks, getBookById } = require('./controllers');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/books', async (req, res) => {
  const books = getAllBooks();
  res.json({ books });
});

app.get('/books/details/:id', async (req, res) => {
  const book = getBookById(parseInt(req.params.id));
  res.json({ book });
});

module.exports = { app };
