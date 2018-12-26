const http = require('http');
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  })
  .listen(port, () => {
    // eslint-disable-next-line
    console.log(`Server running at port ${port}`);
  });
