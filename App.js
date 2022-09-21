const express = require('express');
const bodyParser = require('body-parser');
const routeProdutos = require('./route/produtos-route');
const App = express();
const port = 3000;

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

App.get('/', (req, res) => {
    res.json({application: "CRUD de produtos utilizando Postgres"});
});

App.use('/api/produtos', routeProdutos);

App.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});