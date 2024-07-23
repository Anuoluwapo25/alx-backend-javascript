const { createServer } = require('http');

const app = createServer((res, req) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245);
module.exports = app
