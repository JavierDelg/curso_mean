// Conexion con un nuevo socket
var socket = io.connect("http://localhost:8080", {"forceNew": true});

socket.emit('create', 'room1');

socket.on("new_msg", function(data) {
    alert(data.msg);
}