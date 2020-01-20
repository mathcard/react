const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app); // Extraindo server http do express

setupWebsocket(server); //Exportando o servidor para função setupWebsocket

mongoose.connect('mongodb+srv://week10:week10@cluster0-bakma.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Tirando os warnings
});

app.use(cors()); // Permitindo acesso por outro endereço, nesse caso por todos
app.use(express.json()); // Habilitando json
app.use(routes); // Habilitando as rotas

server.listen(3333); // Habilitando websocket