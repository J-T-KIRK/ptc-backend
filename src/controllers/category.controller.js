const categoryCtrl = {};

const Category = require('../models/categoria.model');

categoryCtrl.getCategories = async (req, res) => {
    const categories = await Category.find(); 
    res.json({
    	ok:true,
    	categories
    });
};


categoryCtrl.createCategory = async (req, res) => {
    const {name, description} = req.body;
    const newCategory = new Category({name, description});
    await newCategory.save(); 
    res.json('Category created');
};

categoryCtrl.obtenerCategoria = async (req, res) => {
	const param = req.params.id;
	const categoria = await Category.find({_id: param});
	res.json({
		ok:true,
		categoria
	})
}


categoryCtrl.deleteCategory = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id); 
    res.json('Category deleted');
};

module.exports = categoryCtrl;