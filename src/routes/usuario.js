const { Router } = require('express');
const router = Router();

const verifyToken = require('../middlewares/verifyToken');

const {
	createUser,
	loginUser,
	verUsuario 
} = require('../controllers/auth.controller');

router.route('/usuario')
		.get(verifyToken, verUsuario)
		.post(createUser)

router.route('/login')
		.post(loginUser)


module.exports = router;