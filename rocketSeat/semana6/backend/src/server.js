const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors()); // Define que todos podem acessar

const server = require('http').Server(app); // Permitido que aplicação rode em websocket
const io = require('socket.io')(server);

// Cria salas para cada box
io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box); 
        console.log('ok');
    })    
});

// Conectando no mongo
mongoose.connect('Colocar endereçoo do mongo', {
    useNewUrlParser: true,
});

// midleware global
app.use((req, res, next) =>{
    req.io = io;
    return next(); // Processa midleware e termina as requisição
});


app.use(express.json()); //Cadastrando módulo dentro do express
app.use(express.urlencoded({ extended: true})); // Allow send files
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); // Sempre que acessar pasta files buscar arquivos fisicos na temp

app.use(require('./routes')); // Importando variavel routes


server.listen(process.env.PORT || 3333); // Port Number, deixa o servidor escolher


