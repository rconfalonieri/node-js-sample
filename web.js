var fs = require('fs');
var express = require('express');
var app = express();
var content = fs.readFileSync('index.html');
app.use(express.logger());

app.get('/', function(request, response) {
  
  //response.send('Hello World2!');
  response.send(content.toString());

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
