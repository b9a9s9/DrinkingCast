const express = require('express')
const Http = require("http").Server(express)
const Socketio = require("socket.io")(Http)

Http.listen(3100, () => {
  console.log("Listening at :3100...");
})

var clients = []

interface Clientinfo {
  gameId: string,
  clientId: string
}

Socketio.on("connection", socket => {

  socket.on('addClient', function (data) {
    let client:Clientinfo = {
      gameId: data.gameId,
      clientId: socket.id
    }
    clients.push(client);
  })

  socket.on('joinRoom', function(username, gameNr) {
    // store the username in the socket session for this client
		socket.username = username;
		// store the game number in the socket session for this client
    socket.game = gameNr;
    // send client to right game number
    socket.join(gameNr);
    // echo to client that he's connected
    socket.emit('updateRoom', username + ' have connected to room: ' + gameNr);
    // echo to a specific game that a person has connected to their game
		socket.broadcast.to(gameNr).emit('updateRoom', username + ' has connected to this room');
  });
})
