const express = require('express');
const path = require('path');

const app = express();

// Set the view engine to EJS
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routers
const authorRouter = require('./public/routes/authorRouter');
const bookRouter = require('./public/routes/bookRouter');
const indexRouter = require('./public/routes/indexRouter');

// Sample data for rendering
const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
];
const users = ['Rose', 'Cake', 'Biff'];

// Define routes
app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render('index', { links: links, users: users });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || err).send(err.message);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
