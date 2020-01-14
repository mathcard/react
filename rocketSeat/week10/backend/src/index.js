const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://week10:week10@cluster0-bakma.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Tirando os warnings
});

app.use(express.json()); // Habilitando json
app.use(routes); // Habilitando as rotas

app.listen(3333);