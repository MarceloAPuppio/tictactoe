import { $, renderSquares, customPlayer } from "./tools.js";
const SQUARES = 9;
let figure = null;
/* trabajar cuadro de diálogo*/
const showDialog = (tilte, text) => {
  $("dialog").show();
  setTimeout(() => $("dialog").close(), 2000);
};

showDialog();

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
  socket.on("winner", (data) => {
    socket.emit("resetBoard", { reset: true });
    // console.log(document.querySelectorAll(".square"));
    document
      .querySelectorAll(".square")
      .forEach((item) => (item.innerHTML = ""));
  });
});
