import { $, renderSquares, customPlayer } from "/static/tools.js";
const SQUARES = 9;
let figure = null;
const socket = io();

//éste método se disparará cuando la conexión se haya establecido
socket.on("connect", () => {
  //ahora si puedo "escuchar" lo que me manda el servidor
  socket.on("init", (data) => {
    console.log(data);
    customPlayer(data.figure);
    for (let index = 0; index < SQUARES; index++) {
      renderSquares($(".board"), index, data.figure, socket);
    }
  });
  socket.on("refresh", ({ posicion, figure }) => {
    $(`[data-posicion='${posicion}']`).innerHTML = figure ? "O" : "X";
  });
});
