const productsCtrl = {};

const Product = require('../models/producto.model');

productsCtrl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json({
        ok:true,
        products
    });
};

productsCtrl.createProduct = async (req, res) => {
    const {name, description, price, enterprise, category, available, img} = req.body;
    const newProduct = new Product({
        name,
        description,
        price,
        enterprise,
        category,
        available
    });
    await newProduct.save();
    res.json({ok: true, message: 'Product Saved'});
};

productsCtrl.buscarProducto = (req, res) => {
     let termino = req.params.termino;

    let regex = new RegExp(termino, 'i');

    Producto.find({ name: regex })
        .populate()
        .exec((err, productos) => {


            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                productos
            })

        })
}

productsCtrl.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json({ 
        ok:true,
        product
    });
};

productsCtrl.updateProduct = async (req, res) => {
    const {name, description, price, enterprise, category, available, img} = req.body;
    await Product.findOneAndUpdate({_id: req.params.id}, {
        name,
        description,
        price,
        enterprise,
        category,
        available,
        img
    });
    res.json({message: 'Product Updated'});
};

productsCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({message: 'Product Deleted'});
};

module.exports = productsCtrl;