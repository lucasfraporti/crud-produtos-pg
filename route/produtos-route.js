const express = require('express');
const produtoController = require('../controller/produtos-controller');
const router = express.Router();

router.get('/', produtoController.getProdutos);
router.get('/:id', produtoController.getProdutosById);
router.post('/', produtoController.createProdutos);
router.put('/:id', produtoController.updateProdutos);
router.delete('/:id', produtoController.deleteProdutos);

module.exports = router;