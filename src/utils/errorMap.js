const errorMap = {
  INVALID_FIELDS: 400,
  MISSING_FIELDS: 400,
  ALREADY_EXISTS: 409,
  INVALID_TOKEN: 401,
  NOT_FOUND: 404,
  INVALID_VALUES: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};