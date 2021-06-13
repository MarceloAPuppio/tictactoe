export const $ = (selector) => document.querySelector(selector);

export const renderSquares = (parentElement, index, figure, socket) => {
  const div = document.createElement("div");
  div.setAttribute("data-posicion", index);
  div.classList.add("square");
  figure ? div.classList.add("circle") : div.classList.add("cross");
  div.addEventListener("click", (e) => {
    if (e.target.innerHTML !== "") return;
    figure ? (e.target.innerHTML = "O") : (e.target.innerHTML = "X");
    socket.emit("movimiento", { posicion: index, value: figure });
  });
  parentElement.appendChild(div);
};
export const customPlayer = (figure) => {
  if (figure) {
    $(".section-players").classList.add("circle");
    // $(".player2").classList.add("circle");
    $("#figureAvatar1").innerHTML = "O";
    $("#figureAvatar2").innerHTML = "X";

    return;
  }
  $(".section-players").classList.add("cross");
  //   $(".player2").classList.add("cross");
  $("#figureAvatar1").innerHTML = "X";
  $("#figureAvatar2").innerHTML = "O";
};
