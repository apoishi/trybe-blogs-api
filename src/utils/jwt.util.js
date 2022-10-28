require('dotenv/config');
const jwt = require('jsonwebtoken');

// Requirement 3 
const createToken = (data) => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256', 
    });

    return token;
};
// Requirement 5
const validateToken = (token) => {
    try {
        const { data } = jwt.verify(token, process.env.JWT_SECRET);
        return { type: null, message: data };
    } catch (error) {
      return { type: 'INVALID_TOKEN', message: 'Expired or invalid token' };
    }
};

module.exports = {
    createToken,
    validateToken,
};