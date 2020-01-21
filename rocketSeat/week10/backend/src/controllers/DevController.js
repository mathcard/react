const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },


    async store (request, response) {                
        const { github_username, techs, latitude, longitude } = request.body;
        
        // let, pois a variavel será sobreposta
        let dev = await Dev.findOne({ github_username });
        
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            // If(name)else{Login}
            const { name = login, avatar_url, bio } = apiResponse.data;
            /*if(name==null){
                name = apiResponse.data.login;
            }*/
            
            const techsArray = parseStringAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url, 
                bio,
                techs: techsArray,
                location,
            })

            // Filtrar as conexões que estão há max 10km e uma tech filtrada
            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                 techsArray,
            )        
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }            
        return response.json(dev);
    },

    //Homework
    async update(){

    },

    async destroy(){

    },
};