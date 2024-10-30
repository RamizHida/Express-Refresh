const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || err).send(err.message);
});

app.listen(PORT, (req, res) => {
  console.log(`My expresss App listening on PORT ${PORT}`);
});
