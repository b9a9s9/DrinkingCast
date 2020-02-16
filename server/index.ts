const express = require('express');
// const app = express()
const Http = require('http').Server(express);
const Socketio = require('socket.io')(Http);

export interface ClientInfo
{
  gameId: string,
  clientId: string
}

let clients: ClientInfo[] = [];

Http.listen(3100, () =>
{
  console.log('Listening at :3100...');
});

Socketio.on('connection', (socket: any) =>
{
  socket.on('addClient', function (data: any)
  {

    let client: ClientInfo = {
      gameId: data.gameId,
      clientId: socket.id
    };
    clients.push(client);
    console.clear();
    console.log(clients);
  });
});


// //socket action
// socket.on("playCard", data => {
//   //data switch
//   switch(data) {
//     //specific emit route
//     case "play":
//       //socket emit
//       Socketio.emit("playCard", 150);
//       console.log("It works");
//       break;
//   }
// })
