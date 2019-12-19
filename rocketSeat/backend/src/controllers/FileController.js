const Box = require('../models/File');

//Criando o Box
class FileController{
    async store(req, res){    
        //Criar um arquivo
        console.log(req.file);
        return res.send('OK');
    }
}

module.exports = new FileController();