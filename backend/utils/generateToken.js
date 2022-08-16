const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET_KEY;

const jwtConfig = {
  expires: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign({ data: payload }, SECRET, jwtConfig);
  return token;
};

module.exports = generateToken;
