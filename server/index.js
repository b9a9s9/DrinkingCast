var express = require('express');
var Http = require("http").Server(express);
var Socketio = require("socket.io")(Http);
Http.listen(3100, function () {
    console.log("Listening at :3100...");
});
var clients = [];
Socketio.on("connection", function (socket) {
    socket.on('addClient', function (data) {
        var client = {
            gameId: data.gameId,
            clientId: socket.id
        };
        clients.push(client);
    });
    socket.on('joinRoom', function (username, gameNr) {
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
});
