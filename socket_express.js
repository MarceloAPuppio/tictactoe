const express = require("express");
const app = express();

const socket_io = require("socket.io");
const io = socket_io();
app.io = io;
let figure = true;

io.on("connection", (cliente) => {
  cliente.emit("init", { figure });
  figure = !figure;
  cliente.on("movimiento", (data) => {
    io.emit("refresh", { posicion: data.posicion, figure: data.value });
  });
});
module.exports = app;
