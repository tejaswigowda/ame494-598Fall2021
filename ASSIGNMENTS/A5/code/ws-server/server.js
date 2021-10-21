

const express = require("express");
const app = express();
const WebSocket = require('ws')



const wss = new WebSocket.Server({ port: 3000})

wss.on('connection', ws => {
  ws.on('message', message => {
     console.log(`Received message => ${message}`)
    db.collection("data").insert(`${message}`, function(err, result){
    });
  })
  ws.send('start');
})

