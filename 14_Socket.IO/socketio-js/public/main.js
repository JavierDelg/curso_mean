// Conexion con un nuevo socket
var socket = io.connect("http://localhost:8080", {"forceNew": true});

socket.on("mensajes", alRecibirMensaje);

function alRecibirMensaje(data){
	console.log(data);
	mostarMensajes(data);
}

function mostarMensajes(data){
	var html= data.map(function(elem, index){
		return (` 
			<div>
				<strong>${elem.author}</strong>
				<em>${elem.text}</em>
			</div>	
			`)
	}).join(" ");

	document.getElementById("divMessages").innerHTML= html;
}

function enviarMensaje(mensj){

	var nuevoMensaje={
		author: document.getElementById("username").value,
		text:  document.getElementById("texto").value
	}
	socket.emit("nuevo-mensaje", nuevoMensaje);

	return false;
}

