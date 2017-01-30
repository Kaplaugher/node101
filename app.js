// include http module, no npm install needed
var http = require("http");
// include fs (file-system)
var fs = require("fs");
// set up http server and store it in the server var.
// the callbakc will run anytime someone hits the port
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
