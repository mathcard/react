const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store (request, response) {                
        const { github_username, techs, latitude, longitude } = request.body;
        
        // let, pois a variavel será sobreposta
        let dev = await Dev.findOne({ github_username });
        
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            // If(name)else{Login}
            const { name = login, avatar_url, bio } = apiResponse.data;
            
            const techsArray = techs.split(',').map(tech => tech.trim());
            
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
    
        }    
        //console.log(name, avatar_url, bio, github_username);
        return response.json(dev);
    }
}