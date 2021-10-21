

const express = require("express");
const app = express();
const WebSocket = require('ws')

var MS = require("mongoskin");
var db = MS.db("mongodb://localhost:27017/sensorData")


const wss = new WebSocket.Server({ port: 3000})

wss.on('connection', ws => {
  ws.on('message', message => {
     console.log(`Received message => ${message}`)
    db.collection("dataWS").insert(`${message}`, function(err, result){
    });
  })
  ws.send('start');
})

