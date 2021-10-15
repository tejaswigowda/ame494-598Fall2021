var express = require("express");
var server = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 3000;

var MS = require("mongoskin");
var db = MS.db("mongodb://localhost:27017/sensorData")

server.get("/", function (req, res) {
    res.redirect("index.html")
});

server.get("/sendData", function (req, res) {
  console.log(req.query);
  db.collection("data").insert(req.query, function(err, result){
    res.end("1");
  });
});

server.use(methodOverride());
server.use(bodyParser());
server.use(express.static(__dirname + '/public'));
server.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
server.listen(port);
