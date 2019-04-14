const { io } = require('../server');
// Saber cuando un usuario se conecta al server
io.on('connection', (client) => {
  console.log('Usuario conectado');

  // enviando mensaje a cliente frontend
  client.emit('enviarMensaje', {
    usuario: 'Admin',
    mensaje: 'Bienvenido a esta aplicación'
  });

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // Esuchar al Cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);
    // broadcast para emitir a todos los usuarios
    client.broadcast.emit('enviarMensaje', data)
    // if (mensaje.usuario) {
    //   callback({
    //     res: 'TODO SALIO BIEN'
    //   });

    // } else {
    //   callback({
    //     resp: 'TODO SALIO MAL'
    //   })
    // }

  });
});