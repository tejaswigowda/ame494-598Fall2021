var express = require("express");
var server = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 1234;

server.get("/", function (req, res) {
    res.redirect("index.html")
});

server.get("/sendData", function (req, res) {
  console.log(req.query);
  res.end("1");
});

server.use(methodOverride());
server.use(bodyParser());
server.use(express.static(__dirname + '/public'));
server.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
server.listen(port);
