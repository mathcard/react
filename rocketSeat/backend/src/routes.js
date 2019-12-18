const express = require('express');

const routes = express.Router();


// req -> Requisição feita para o servidor(Form, Parametros)
// res -> Respota ao client
routes.get('/teste', (req, res) => {
    return res.send('Hello Math');
});

module.exports = routes; //Exportando variavel routes