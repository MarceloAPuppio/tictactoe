let board = {
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
const winner = (
  { 0: a, 1: b, 2: c, 3: d, 4: e, 5: f, 6: g, 7: h, 8: i },
  io
) => {
  if (a === b && a === c && b === c) {
    setTimeout(() => io.emit("winner", { winner: !!a }), 500);
    return true;
  }
  if (a === d && a === g && g === d) {
    setTimeout(() => io.emit("winner", { winner: !!a }), 500);
    return true;
  }
  if (c === f && c === i && i === f) {
    setTimeout(() => io.emit("winner", { winner: !!a }), 500);
    return true;
  }
  if (g === h && g === i && i === h) {
    setTimeout(() => io.emit("winner", { winner: !!a }), 500);
    return true;
  }
  if (b === e && b === h && h === e) {
    setTimeout(() => io.emit("winner", { winner: !!a }), 500);
    return true;
  }
  if (a === e && a === i && i === e) {
    setTimeout(() => io.emit("winner", { winner: !!a }), 500);
    return true;
  }
  if (d === e && d === f && e === f) {
    setTimeout(() => io.emit("winner", { winner: !!a }), 500);
    return true;
  }
  if (g === e && g === c && c === e) {
    setTimeout(() => io.emit("winner", { winner: !!a }), 500);
    return true;
  }
  return false;
};

module.exports = { board, winner };
