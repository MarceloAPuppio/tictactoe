const express = require("express");
//app viene de socket_express ya que tiene la propiedad .io
const app = require("./socket_express");
const http = require("http");
const server = http.createServer(app);

//Este middleware nos permite servir archivos estaticos
app.use("/static", express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

server.listen(3001, () => {
  console.log("servidor corriendo en puerto 3001");
});

app.io.attach(server);
