import socketio from 'socket.io-client';

const socket = socketio('http://192.168.15.6:3333', {
  autoConnect: false,
});

//function connect(latitude, longitude, techs){
  function connect(){
  /*socket.io.opts.query = {
    latitude, 
    longitude, 
    techs,
  }; */
  console.log('Chamada socket')
  socket.connect();
}

function disconnect(){
  if(socket.connected){
    socket.disconnect();
  }
}

export{
  connect,
  disconnect,
};