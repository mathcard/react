const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    path:{
        type: String,
        required: true,
        },
    },
    {
    timestamps: true,  // Cria campo de criação e alteração
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});
 
// Função que gera url para ser acessado no frontend
File.virtual('url').get(function(){
     // Deixa o servidor escolher a variavel de ambiente. envia novamente
    const url = process.env.URL || 'http://localhost:3333'   
    return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);