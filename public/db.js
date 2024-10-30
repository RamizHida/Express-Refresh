const authors = [
  { id: 1, name: 'Brayan' },
  { id: 2, name: 'Camren' },
  { id: 3, name: 'Alannn' },
];

// check the parameter!

function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

module.exports = { getAuthorById };
