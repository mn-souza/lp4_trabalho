const express = require('express');
const router = express.Router();

const produtosController = require('./Api Conectando Mongo/controller/usuarioController'); // Importa o controlador de usuários

// Rotas para a entidade "produtos"
router.get('/data', produtosController.getAllProdutos);
router.post('/data', produtosController.createProdutos);
router.put('/data/:id', produtosController.updateProdutos);
router.delete('/data/:id', produtosController.deleteProdutos);

module.exports = router;
