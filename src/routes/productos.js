const { Router } = require('express');
const router = Router();

const { getProducts, createProduct, getProduct, updateProduct, deleteProduct, buscarProducto } = require('../controllers/products.controller');

router.route('/producto')
    .get(getProducts)
    .post(createProduct)

router.route('/:id')
    .get(getProduct)    
    .put(updateProduct)
    .delete(deleteProduct)

router.route('/:termino')
	.get(buscarProducto)

module.exports = router;