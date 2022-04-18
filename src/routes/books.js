// Libraries
const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
  res.send('hello world');
});

router.post('/', (req, res) => {
  res.send('hello world post');
});

router.put('/:id', (req, res) => {
  res.send('hello world put');
});

router.delete('/:id', (req, res) => {
  res.send('hello world delete');
});

module.exports = router;
