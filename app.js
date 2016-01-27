var express = require('express');
var request = require('request');
var string = require('string');
var url = require('url');

var app = express();
app.use('/', function(req, res) {

  var untouchedHostName = req.hostname;

  var newUrl = req.url.replace(req.hostname,'');
  newUrl = newUrl.replace('/?url=','');

  newUrl = url.resolve(untouchedHostName, newUrl);
  console.log(newUrl);

  req.pipe(request(newUrl)).pipe(res);
});

app.listen(process.env.PORT || 3000);
