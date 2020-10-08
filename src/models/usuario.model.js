const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new Schema({
	nombre: {
		type: String,
		required: [true, 'Se necesita un nombre']
	},
	email: {
		type: String,
		required: [true, 'Es necesario el email'],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'Es necesario la contraseña']
	}
});

usuarioSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

usuarioSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = model('Usuario', usuarioSchema)