// INDEX - listagem, SHOW - monstraruma sessão, STORE - criar um sessão, UPDATE - alterar uma sessão, DESTROY - destruir um sessão

const User = require('../models/User')

module.exports = {
  async store(req, res){
    const { email } = req.body;
  
    let user = await User.findOne({ email: email});
    if(!user){
      user = await User.create({ email });
    }
    

    return res.json(user);
  }

};