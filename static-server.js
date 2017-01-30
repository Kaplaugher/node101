var connect = require('connect');
var serveStatic = require('serve-static');
var http = require("http");

var server = http.createServer((req,res) => {
  console.log("someone connected to server");
  console.log(req.url);
  if(req.url === '/'){
    res.writeHead(200,{'content-type':'text-html'})
    res.write('<h1>THIS IS THE HOME PAGE</H1>')
    res.write('<p>YOYOYOYOO</p>')
    res.write('<p>i made a page in node.</p>')
  }else{
    res.end();
  }
});

server.listen(8000);
console.log("sever is litining to traffic at port 8001")
