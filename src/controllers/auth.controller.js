const { validateLogin } = require('../services/auth.service');
const { mapError } = require('../utils/errorMap');
const { validateBody } = require('../validations/validateInputValues');

// Requirement 3 
const login = async (req, res) => {
    const { email, password } = req.body;

    const error = validateBody({ email, password });
    if (error.type) return res.status(mapError(error.type)).json({ message: error.message });
    
    const token = await validateLogin({ email, password });
    if (token.type) return res.status(mapError(token.type)).json({ message: token.message });

    res.status(200).json({ token: token.message });
};
module.exports = { login };