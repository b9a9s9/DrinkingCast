var airconsole = new AirConsole();

// // When we press our button, we send a message to the screen
// document.getElementById('btn-msg').addEventListener("click", function() {
//   airconsole.message(AirConsole.SCREEN, "How are you?");
// });

// // Listen for messages
// airconsole.onMessage = function(from, data) {

//   // Show message on device screen
//   var info = document.createElement('DIV');
//   info.innerHTML = data;
//   document.body.appendChild(info);
// };

document.getElementById('btn-msg').addEventListener("click", function() {
  airconsole.message(AirConsole.SCREEN, "How are you?");
});
