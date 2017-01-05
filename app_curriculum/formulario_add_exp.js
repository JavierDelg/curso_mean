 var experiencias = new Array();
 var storage = localStorage;

 window.onload = function() {
     document.getElementById("anhadir").addEventListener("click", anhadir, false);
     document.getElementById("cargar").addEventListener("click", cargar, false);
     document.getElementById("cargarLocalStorage").addEventListener("click", cargarLocalStorage, false);
     document.getElementById("fileJson").addEventListener("change", leerArchivo, false);
     if (storage.getItem(1) == null) {
         return;
     } else {
         var datosAlmacenados = storage.getItem(1);
         document.getElementById("json").value = datosAlmacenados;
         var datosLeidos = JSON.parse(datosAlmacenados);
         experiencias = datosLeidos;
         var cadena = "<table><tr><th>Empresa</th><th>Cargo</th><th>Fecha inicio</th><th>Fecha Fin</th><th>Localizacion</th></tr><tr>";
         for (var i = 0; i < datosLeidos.length; i++) {
             cadena += "<td>" + datosLeidos[i].empresa + "</td><td>" + datosLeidos[i].cargo + "</td><td>" + datosLeidos[i].fechaI + "</td><td>" + datosLeidos[i].fechaF + "</td><td>" + datosLeidos[i].localizacion + " </td></tr>"
         }
         cadena += "</table>"
         document.getElementById("experiencias").innerHTML += cadena;
     }
 }

 function anhadir() {
     var experiencia = new Object();
     experiencia.empresa = document.getElementById("empresa").value;
     experiencia.cargo = document.getElementById("cargo").value;
     experiencia.fechaI = document.getElementById("fechaInicio").value;
     experiencia.fechaF = document.getElementById("fechaFin").value;
     experiencia.localizacion = document.getElementById("localizacion").value;

     experiencias.push(experiencia);
     var datosJson = JSON.stringify(experiencias);
     document.getElementById("json").value = datosJson;
     storage.setItem("1", datosJson);
 }


 function cargar() {
     var texto = document.getElementById("json").value;
     var datosLeidos = JSON.parse(texto);
     var cadena = "<table><tr><th>Empresa</th><th>Cargo</th><th>Fecha inicio</th><th>Fecha Fin</th><th>Localizacion</th></tr><tr>";
     for (var i = 0; i < datosLeidos.length; i++) {
         cadena += "<td>" + datosLeidos[i].empresa + "</td><td>" + datosLeidos[i].cargo + "</td><td>" + datosLeidos[i].fechaI + "</td><td>" + datosLeidos[i].fechaF + "</td><td>" + datosLeidos[i].localizacion + " </td></tr>"
     }
     cadena += "</table>"
     document.getElementById("experiencias").innerHTML = cadena;
 }

 function cargarLocalStorage() {
     var datosAlmacenados = storage.getItem(1);
     document.getElementById("json").value = datosAlmacenados;
     var datosLeidos = JSON.parse(datosAlmacenados);
     var cadena = "<table><tr><th>Empresa</th><th>Cargo</th><th>Fecha inicio</th><th>Fecha Fin</th><th>Localizacion</th></tr><tr>";
     for (var i = 0; i < datosLeidos.length; i++) {
         cadena += "<td>" + datosLeidos[i].empresa + "</td><td>" + datosLeidos[i].cargo + "</td><td>" + datosLeidos[i].fechaI + "</td><td>" + datosLeidos[i].fechaF + "</td><td>" + datosLeidos[i].localizacion + " </td></tr>"
     }
     cadena += "</table>"
     document.getElementById("experiencias").innerHTML = cadena;
 }

 function leerArchivo(event) {
     var fileInput = document.getElementById("fileJson");
     var fileDisplay = document.getElementById("json");
     var file = fileInput.files[0];

     var reader = new FileReader();
     var datosNormales;
     reader.onload = function(e) {
         fileDisplay.innerHTML = reader.result;
         datosNormales = JSON.parse(reader.result);
         experiencias = datosNormales;


         storage.setItem("1", JSON.stringify(datosNormales));
     }
     reader.readAsText(file);



 }