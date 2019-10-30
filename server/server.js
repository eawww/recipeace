const express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
const ip = require("ip");

const FRONTEND_PORT = 3000;

server.listen(3001);

const controllerNamespace = io.of("/controller");
const displayNamespace = io.of("/display");

controllerNamespace.on("connection", socket => {
  console.log(`${new Date().toISOString()} - Controller Connected`);
});

displayNamespace.on("connection", socket => {
  console.log(`${new Date().toISOString()} - Display Connected`);
  socket.emit('controllerUrl', `http://${ip.address()}${`:${FRONTEND_PORT}`}/controller`);
});

app.get("/bort", (req, res) => {
  res.send("BOOP");
});

app.use(express.static("public"));
