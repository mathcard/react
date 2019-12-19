const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Conectando no mongo
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-bakma.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(express.json()); //Cadastrando módulo dentro do express
app.use(express.urlencoded({ extended: true})); // Allow send files
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); // Sempre que acessar pasta files buscar arquivos fisicos na temp

app.use(require('./routes')); // Importando variavel routes


app.listen(3333); // Port Number, i chose@


