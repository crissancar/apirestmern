const User = require('../models/User');

// ##########
//  Promesas:
//  Async/Await:
// ##########

//crear usuario
exports.newUser = async (req, res, next) => {

    //mapea el req.body con las propiedades del modelo User
    const user = new User(req.body);
    //captura de excepciones y salida
    try{
        await user.save();
        res.json({
            ok: true,
            message: 'Usuario guardado correctamente',
            user
        });
    } catch (error){       
        res.json({
            ok: false,
            message: 'Error al guardar el usuario',
            error
        })    
        next();
    }
}

//listar todos los usuarios
exports.getUsers = async (req, res, next) => {

    try{
        const users = await User.find({});
        res.json({
            ok: true,
            message: 'Usuarios listados correctamente',
            users
        });
    }catch(error){
        console.log(error);
        next();
    }
}

//listar un usuario
exports.getUser = async (req, res, next) => {
    
    try {
        const user = await User.findById(req.params.id);
        res.json({
            ok: true,
            user
        });
    } catch (error) {
        res.json({
            ok: false,
            message: 'El usuario no existe',
            error
        })
        next();
    }
}

//actualizar usuario
exports.updateUser = async (req, res, next) => {

    try {
        const user = await User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true});

        res.json({
            ok: true,
            user
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        })
        next();
    }
}

//eliminar usuario
exports.deleteUser = async (req, res, next) => {

    try {
        const user = await User.findByIdAndDelete({_id:req.params.id});
        res.json({
            ok: true,
            message: 'Usuario eliminado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        })
    }
}