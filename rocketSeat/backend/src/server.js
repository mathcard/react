const express = require('express');
const mongoose = require('mongoose');


const app = express();

// Conectando no mongo
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-bakma.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(express.json()); //Cadastrando módulo dentro do express
app.use(express.urlencoded({ extended: true})); // Allow send files

app.use(require('./routes')); // Importando variavel routes


app.listen(3333); // Port Number, i chose@


