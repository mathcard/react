const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

// Armazenando as conexões
const connections = [];

exports.setupWebsocket = (server) => {  
  const io = socketio(server);

  io.on('connection', socket => {
    console.log(`Socket: ${socket.id}`);
    const {latitude, longitude, techs} = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates:{
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    });


    //  TESTANDO ENVIO DE MENSAGEM
    /*setTimeout(() =>{
      socket.emit('message', 'Hello OmniStack')
    }, 3000); */
  });
};

exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return calculateDistance(coordinates, connection.coordinates) < 10
        && connection.techs.some(item => techs.includes(item))
  })
}