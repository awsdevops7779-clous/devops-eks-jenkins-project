const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from devops-eks-jenkins-project!");
  res.end();
}).listen(3000);