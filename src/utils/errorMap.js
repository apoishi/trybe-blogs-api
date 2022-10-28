const errorMap = {
  INVALID_FIELDS: 400,
  MISSING_FIELDS: 400,
  ALREADY_EXISTS: 409,
  INVALID_TOKEN: 401,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};