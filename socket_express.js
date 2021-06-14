const express = require("express");
const app = express();
let { board, winner } = require("./game");
const socket_io = require("socket.io");
const io = socket_io();
app.io = io;
let figure = true;

io.on("connection", (cliente) => {
  cliente.emit("init", { figure });
  figure = !figure;

  cliente.on("resetBoard", () => {
    board = {
      0: NaN,
      1: NaN,
      2: NaN,
      3: NaN,
      4: NaN,
      5: NaN,
      6: NaN,
      7: NaN,
      8: NaN,
    };
    console.log(board);
  });
  cliente.on("movimiento", (data) => {
    board[data.posicion] = data.value;
    if (winner(board, io)) return;
    io.emit("refresh", { posicion: data.posicion, figure: data.value });
  });
});
module.exports = app;
