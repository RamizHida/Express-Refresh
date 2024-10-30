const db = require('../db');
const aysncHandler = require('express-async-handler');
const CustomNotFoundError = require('../errors/CustomeNotFoundError');

const getAuthorById = aysncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError('Author Not Found!!');
  }

  res.send(`Author Name: ${author.name}`);
});

module.exports = { getAuthorById };
