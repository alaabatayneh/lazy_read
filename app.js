
var express = require('express');
var http = require('http');
var url  = require('url');
var request = require('request');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(function(req, res) {
  console.log('Express server listening on port ' + app.get('port'));
  res.writeHead(200, {'Content-Type': 'application/json'});
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var paragraph = url_parts.query.q;
  var word_count = countWords(paragraph);
  var seconds_needed = (word_count / 275) * 60; // in seconds
  var mins_needed = Math.floor(seconds_needed / 60);
  var image_exists = countImages(paragraph);
  var length_images = image_exists * 12;
  var ret = {
    'in_seconds': (seconds_needed).toFixed(2) + length_images + ' seconds',
    'in_mins': mins_needed + ' minutes',
  };
  res.end(JSON.stringify(ret));

}).listen(app.get('port'));

function countWords(str) {
  var matches = str.match(/[\w\d]+/gi);
  return matches ? matches.length : 0;
}

function countImages(str){
  if (str.match(new RegExp('<img src='))) {
    return str.match(new RegExp('<img src=')).length
  } else {
    return 0;
  }
}
