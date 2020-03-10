const express = require('express');
const Http = require('http').Server(express);
const socketIO = require('socket.io')(Http);

Http.listen(3100, () =>
{
  console.log('Listening at :3100...');
});

let clients: Clientinfo[] = [];

interface Clientinfo
{
  gameId: string,
  clientId: string
}

socketIO.on('connection', (socket: any) =>
{

  socket.on('addClient', (data: Clientinfo) =>
  {
    let client: Clientinfo = {
      gameId: data.gameId,
      clientId: socket.id
    };
    clients.push(client);
  });

  socket.on('joinRoom', (username: string, gameNr: string) =>
  {
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
