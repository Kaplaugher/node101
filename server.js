var http = require("http");
// console.log(http);
var server = http.createServer((req, res) => {
  console.log(req.rawHeaders[1]);
  res.writeHead(200,{'content-type':'text-html'});
  res.end("hello, friend. This is your node server.");

});

console.log("Server listening on port 8000 for connections...");
server.listen(8000);
