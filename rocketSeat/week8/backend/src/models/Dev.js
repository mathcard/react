const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  user:{
    type: String,
    required: true,
  },
  bio: {
  type: String,
  required: true,
  },
},{
  timestamps: true,
});

// createdAt, updateAt

module.exports = model('Dev', DevSchema);