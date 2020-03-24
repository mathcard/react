const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return response.send({
      evento: 'Semana OmniStack 11',
      aluno: 'mathcard'
    });
});

app.listen(3333);