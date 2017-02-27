var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require("socket.io")(server);

var messages = [{  
  id: 1,
  text: "Primer mensaje del servidor",
  author: "Servidor"
},{  
  id: 1,
  text: "Coslada es como un mundo paralelo, con policías mafiosos...",
  author: "Germán"
},{  
  id: 1,
  text: "Sacado del blog del autor",
  author: "Carlos Azaustre"
}];

app.use(express.static('public'));

var usuariosConectados = 0;
io.on("connection", alConectarseAlguien);

function alConectarseAlguien(socket){
  usuariosConectados ++;
  console.log("Alguien se ha conectado." + "\nUsuario totales: " + usuariosConectados );
  messages.push({text:"Alguien se ha conectado " + "Users: " + usuariosConectados ,author: "Servidor "});
  io.sockets.emit("mensajes", messages);

  socket.on("nuevo-mensaje", function(data){
    messages.push(data);
    io.sockets.emit("mensajes", messages);
  });

  socket.on("disconnect",function(){
    var n={
      author: "User" + usuariosConectados,
      text:  "desconectado"
    }
    usuariosConectados--;
    console.log("Alguien se ha desconectado." + "\nUsuario totales: " + usuariosConectados );
    messages.push({ author: "Servidor", text:  "Alguien se ha desconectado. Users:" + usuariosConectados });
   io.sockets.emit("mensajes", messages);

  })
}


server.listen(8080, function(){
  console.log("Servidor escuchando ...");
})