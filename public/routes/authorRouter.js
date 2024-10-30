const { Router } = require('express');
const { getAuthorById } = require('../controllers/authorController.js');

const authorRouter = Router();

authorRouter.get('/', (req, res) => {
  res.send('All Authors!!');
});

//

//

// authorRouter.get('/:authorId', (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID Is:: ${authorId}`);
// });

authorRouter.get('/:authorId', getAuthorById);

module.exports = authorRouter;
