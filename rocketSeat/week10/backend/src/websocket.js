const socketio = require('socket.io');

exports.setupWebsocket = (server) => {  
  const io = socketio(server);

  io.on('connection', socket => {
    console.log(`Socket: ${socket.id}`);
   // console.log(`Query: ${socket.handshake.query}`);
  });
};