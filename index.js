var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;


app.get('/add/:numone/:numtwo', function(req, res) {
  var sum = parseInt(req.params.numone) + parseInt(req.params.numtwo);
  res.send(sum.toString());
});

app.get('/subtract/:numone/:numtwo', function(req, res) {
  var diff = parseInt(req.params.numone) - parseInt(req.params.numtwo);
  res.send(diff.toString());
});

app.get('/divide/:numone/:numtwo', function(req, res) {
  var product = parseInt(req.params.numone) / parseInt(req.params.numtwo);
  res.send(product.toString());
});

app.get('/multiply/:numone/:numtwo', function(req, res) {
  var product = parseInt(req.params.numone) * parseInt(req.params.numtwo);
  res.send(product.toString());
});

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});