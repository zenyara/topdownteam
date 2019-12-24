// https://www.tutorialspoint.com/socket.io/socket.io_event_handling.htm
// init project
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

//Whenever someone connects this gets executed
io.on("connection", function(socket) {
  console.log("A user connected");

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function() {
    console.log("A user disconnected");
  });
});

// listen for requests :)
const listener = http.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
