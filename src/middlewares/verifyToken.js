const jwt = require('jsonwebtoken');
const config = require('../config/config');

async function verifyToken(req, res, next) {
    const token = req.headers['x-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided' });
    }
    // Decode the Tokenreq.userId = decoded.id;
    const decoded = await jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    next();
}

module.exports = verifyToken;