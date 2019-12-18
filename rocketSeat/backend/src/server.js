const express = require('express');

const app = express();

app.use(express.json()); //Cadastrando módulo dentro do express
app.use(express.urlencoded({ extended: true})); // Allow send files

app.use(require('./routes')); // Importando variavel routes


app.listen(3333); // Port Number, i chose.