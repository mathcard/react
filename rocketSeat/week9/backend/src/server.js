const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-bakma.mongodb.net/week9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json()); // Habilitando requisições do tipo json
app.use(routes);
app.listen(3333); // Definindo a porta