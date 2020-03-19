const Dev = require('../models/Dev');

module.exports = {
  async store(req, res){
    console.log(req.params.devId); // PARAMS - Buscando parametro  na url - id usuario curtido
    console.log(req.headers.user); // HEADER - Id passado no header - 

    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);


    if(!targetDev){
      return res.status(400).json({ error: 'Dev not exists'});
    }
    
    // Curtindo
    loggedDev.dislikes.push(targetDev._id);

    // Salvando
    await loggedDev.save();


    return res.json({loggedDev});
  }
};