const path = require('path');
const url = process.argv[2];
const options = JSON.parse(process.argv[3]);

const nightmare = require('nightmare')(
  Object.assign({
    width: 800,
    height: 600,
    waitTimeout: 1000000000,
  }, options)
);

nightmare
  .goto(url)
  .wait(() => null)
  .end()
  .catch((error) => console.error(error));

