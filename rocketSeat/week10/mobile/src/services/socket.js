import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.72:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction){
  socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs){
//  function connect(){
  socket.io.opts.query = {
    latitude, 
    longitude, 
    techs,
  };   
  socket.connect();

   //TESTANDO RECEBIMENTO DE MENSAGEM
  /*socket.on('message', text =>{
    console.log(text);
  }) */
}

function disconnect(){
  if(socket.connected){
    socket.disconnect();
  }
}

export{
  connect,
  disconnect,
  subscribeToNewDevs,
};