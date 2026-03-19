const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from DevOps Project");
  res.end();
}).listen(3000);