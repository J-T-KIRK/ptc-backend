const jwt = require('jsonwebtoken');

usuarioCtrl = {};

//modelo usuario
const Model = require('../models/usuario.model');

//crear usuario
usuarioCtrl.createUser = async (req, res) => {
	 try {
        const { nombre, email, password, empresa } = req.body;

        const user = new Model({
            nombre,
            email,
            password,
            empresa
        });
        user.password = await user.encryptPassword(password);
        await user.save();

        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        });

        res.json({
        	ok: true,
        	mensaje: 'usuario creado',
        	token
        });

    } catch (e) {
        res.json({
        	ok: false,
        	mensaje: 'Error',
        	e
        });
    }
};

//login
usuarioCtrl.loginUser = async (req, res) => {
 const user = await Model.findOne({email: req.body.email})
    if(!user) {
        res.json({
            ok:false,
            token: null,
            mensaje: 'Error'
        })
    }
    const validPassword = await user.comparePassword(req.body.password, user.password);
    if (!validPassword) {
        res.json({
            ok: false,
            token: null,
            mensaje: 'Error'
        })
    }
    const token = jwt.sign({id: user._id}, process.env.SECRET, {
        expiresIn: 60 * 60 * 24
    });
    res.json({
        ok:true,
        token
    });
};


//ver datos de usuario
usuarioCtrl.verUsuario = async (req, res) => {
    const user = await Model.findById(req.userId, { password: 0});
    if (!user) {
        return res.status(404).send("No user found.");
        console.log('error')
    }
    res.status(200).json({
        ok: true,
        usuario: user
    });

}


module.exports = usuarioCtrl;