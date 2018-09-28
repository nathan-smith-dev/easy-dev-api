const { verifyIdToken } = require('../services/authService');

async function verifyTokenMiddleware(req, res, next) {
    try {
        const decodedToken = await verifyIdToken(req.get('x-auth'));
        if (decodedToken) {
            res.user = decodedToken;
            next();
        } else {
            res.status(400).send('No authorization token present.');
        }
    } catch (err) {
        res.status(401).send('Invalid authorization token.');
    }
}

module.exports = verifyTokenMiddleware;
