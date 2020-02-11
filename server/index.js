const express = require('express')
// const app = express()
const Http = require("http").Server(express);
const Socketio = require("socket.io")(Http);

Http.listen(3100, () => {
  console.log("Listening at :3100...");
});

Socketio.on("connection", socket => {
  //socket action
  socket.on("playCard", data => {
    //data switch
    switch(data) {
      //specific emit route
      case "play":
        //socket emit
        Socketio.emit("playCard", 150);
        console.log("It works");
        break;
    }
  })
})
