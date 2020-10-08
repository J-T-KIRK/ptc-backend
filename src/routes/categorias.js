const { Router } = require('express');
const router = Router();

const { getCategories, createCategory, deleteCategory, obtenerCategoria } = require('../controllers/category.controller')

router.route('/categoria')
    .get(getCategories)
    .post(createCategory);

router.route('/:id')
	.get(obtenerCategoria)
    .delete(deleteCategory);

module.exports = router;