const http = require('http');

http.createServer((req, res) => {
  res.write("Updated via Jenkins Pipeline");
  res.end();
}).listen(3000);