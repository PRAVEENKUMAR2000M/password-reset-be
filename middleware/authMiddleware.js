const jwt = require('jsonwebtoken');
const config = require('../utils/config');

const authMiddleware = {
    verifyToken: (request, response, next) => {
        const token = request.headers.authorization;

        // If token not found
        if (!token) {
            return response.json({ error: 'Token not found' });
        }

        // If token is available, decode the token
        const getTokenFrom = (req) => {
            const authorization = req.headers.authorization;
            if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
                return authorization.substring(7);
            }
            return null;
        };

        try {
            const decodedToken = jwt.verify(getTokenFrom(request), config.JWT_SECRET);
            request.userId = decodedToken.id;
            // console.log(request.userId);
            next();
        } catch (error) {
            return response.status(401).json({ error: 'Invalid token' });
        }
    },
};

module.exports = authMiddleware;
