const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.send('Indexed Routered!');
});

module.exports = indexRouter;
