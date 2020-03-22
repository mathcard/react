const axios = require('axios');
const Dev = require('../models/Dev');

// Apenas um objeto
module.exports = {
  async index(req, res){
    const {user} = req.headers; // Id user passado no header

    const loggedDev = await Dev.findById(user); // Procurando ID no banco

    const users = await Dev.find({
      $and: [
        { _id: {$ne: user}}, // not equal - todos usuarios exceto id do user
        { _id: {$nin: loggedDev.likes}}, // not in - todos ids que não estão na lista de likes
        { _id: {$nin: loggedDev.dislikes}}, // not in - todos ids que não estão na lista de dislikes
      ],
    })
    return res.json(users);
  },


  async store(req, res){    
    // Info passada para api
    const { username } = req.body; 

    //Verficando se o usuário já existe
    const userExists = await Dev.findOne({ user: username});

    if(userExists){
      return res.json(userExists);      
    }

    // Gravando a resposta que será recebida da api
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    // Desestrutuando os dados
    const { name, bio, avatar_url: avatar } = response.data;

    // Criando um objeto de acordo com o model
    const dev = await Dev.create({ 
      name, 
      user: username,
      bio,
      avatar
     })

    // Retornando o model em formato json
    return res.json(dev);
  }
  
};