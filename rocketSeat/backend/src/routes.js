const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//GET Buscar, POST Criar, PUT Editar, DELETE Deletar
routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", 
    multer(multerConfig).single('file'), 
    FileController.store);



// req -> Requisição feita para o servidor(Form, Parametros)
// res -> Respota ao client
/*routes.get('/teste', (req, res) => {
    return res.send('Hello Math');
});
*/


module.exports = routes; //Exportando variavel routes