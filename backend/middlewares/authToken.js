const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const authToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({ message: 'token not found.' });

    jwt.verify(authHeader, secretKey);
  } catch (error) {
    return res.status(401).json({ message: 'expired or invalid token.' });
  }
  next();
};

module.exports = authToken;
