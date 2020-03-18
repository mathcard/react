const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://week8:week8@cluster0-bakma.mongodb.net/week8?retryWrites=true&w=majority' , { useNewUrlParser: true });

server.use(express.json());
server.use(routes);

server.listen(3333);