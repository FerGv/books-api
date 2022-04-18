// Libraries
const express = require('express');

// Routes
const router = require('./routes');

const main = async () => {
  const app = express();
  app.use(router);
  await app.listen(7001);
  console.log('Listening in port 7001');
};

main();
