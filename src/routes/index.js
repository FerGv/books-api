// Libraries
const { Router } = require('express');

// Routes
const bookRouter = require('./books');

const router = new Router();

router.use('/books', bookRouter);

module.exports = router;
