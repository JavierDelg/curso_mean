var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require("socket.io")(server);

io.sockets.on('connection', function(socket) {
  socket.on('create', function(room) {
    socket.join(room);
  });
});
io.sockets.in('room1').emit('new_msg', {msg: 'hello'});
server.listen(8080, function(){
  console.log("Servidor escuchando ...");
})