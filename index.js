
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!');

/*var http = require('http');

http.createServer(function(res,req){
res.writeHead(200,"{Content-type:"html/text"}");
  res.end("<P>")
res.enconst express = require('express')
});*/



