var express = require('express');
// const app = express()
var Http = require("http").Server(express);
var Socketio = require("socket.io")(Http);
var clients = [];
Http.listen(3100, function () {
    console.log("Listening at :3100...");
});
Socketio.on("connection", function (socket) {
    socket.on('addClient', function (data) {
        var client = {
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
