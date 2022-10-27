// Requirement 3 
const error = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Unexpected error. Please, try again later';

  return res.status(status).json({ message });
};

module.exports = error;