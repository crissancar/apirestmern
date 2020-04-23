const Product = require('../models/Product');

exports.newProduct = async (req, res, next) => {

    try {
        const product = new Product(req.body);
        await product.save();
        res.json({
            ok: true,
            product
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
        next();
    }
}

exports.getProducts = async (req, res, next) => {

    try {
        const products = await Product.find({});
        res.json({
            ok: true,
            products
        });

    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
        next();
    }
}

exports.getProduct = async (req, res, next) => {
    
    try {
        const product = await Product.findById(req.params.id);
        res.json({
            ok: true,
            product
        });
    } catch (error) {
        res.json({
            ok: false,
            message: 'El producto no existe',
            error
        });
        next();
    }
}

//actualizar usuario
exports.updateProduct = async (req, res, next) => {

    try {
        const product = await Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true});

        res.json({
            ok: true,
            product
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
        next();
    }
}

//eliminar usuario
exports.deleteProduct = async (req, res, next) => {

    try {
        const product = await Product.findByIdAndDelete({_id:req.params.id});
        res.json({
            ok: true,
            message: 'Producto eliminado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
        next();
    }
}