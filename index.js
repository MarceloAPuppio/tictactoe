const express = require("express");
const path = require("path");
//app viene de socket_express ya que tiene la propiedad .io
const app = require("./socket_express");
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;
//Este middleware nos permite servir archivos estaticos
/*ESTE MIDDELWARE LO USABA ANTES... HICE UN UPDATE*/
// app.use("/static", express.static("public"));
/*NUEVO MIDDELWARE DE ARCHIVOS ESTÁTICOS*/
app.use(express.static(path.join(__dirname, "public")));

/*ESTO POR AHORA NO LO VOY A USAR YA QUE YA ESTOY SIRVIENDO LOS ACRCHIVOS ESTÁTICOS DE OTRA MANERA */
// app.get("/", (req, res) => {
//   // res.sendFile("index.html", { root: __dirname });
// });

server.listen(PORT, () => {
  console.log("servidor corriendo en puerto 3001");
});

app.io.attach(server);
