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
    timestamps: true  // Cria campo de criação e alteração
});
 
module.exports = mongoose.model('File', File);