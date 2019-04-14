let socket = io();

socket.on('connect', function () {
  console.log('Conectado al servidor');
});
// on para escuchar
socket.on('disconnect', function () {
  console.log('Perdimos conexión con el Servidor');
});

// Enviar información al servidor uso los emit
socket.emit('enviarMensaje', {
  usuario: 'Miguel',
  mensaje: 'Hola Mundo'
}, function (resp) {
  console.log('respuesta server: ', resp);
});

// Escuchando desde el servidor
socket.on('enviarMensaje', function (mensaje) {
  console.log('Servidor:', mensaje);
})