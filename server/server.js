
const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;
server.use(cors());

const xmenController = require ("./controllers/xmenController");

server.get('/xmen', xmenController.getAllXmen);

server.listen(port, function () {
  console.log('Servidor andando en ' + port);
});