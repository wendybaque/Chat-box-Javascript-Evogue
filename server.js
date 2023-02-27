// SERVEUR
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
  socket.on("chat message", (msg) => {
    console.log("message send: " + msg);
    io.emit("chat message", msg);
  });
});

http.listen(3000, () => {
  console.log("Server running on 3000!");
});
