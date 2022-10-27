const { validateLogin } = require('../services/auth.service');
const { mapError } = require('../utils/errorMap');
const { validateBody } = require('../validations/validateInputValues');

// Requirement 3 
const login = async (req, res) => {
    const { email, password } = req.body;

    const body = await validateBody({ email, password });
    if (body.type) return res.status(mapError(body.type)).json({ message: body.message });
    
    const token = await validateLogin({ email, password });
    if (token.type) return res.status(mapError(token.type)).json({ message: token.message });

    res.status(200).json({ token: token.message });
};
module.exports = { login };