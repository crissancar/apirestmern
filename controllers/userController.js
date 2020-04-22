const User = require('../models/User');

// ##########
//  Promesas:
//  Async/Await:
// ##########
exports.new = async (req, res) => {

    //mapea el req.body con las propiedades del modelo User
    const user = new User(req.body);
    //captura de excepciones y salida
    try{
        await user.save();
        res.json({
            ok: true,
            message: 'Usuario guardado correctamente',
            user
        })
    } catch (err){
        console.log(err);
        next();
    }
}