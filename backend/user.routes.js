const express = require('express');
const userController = require('./controllers/userController');

const route = express.Router();

route.post('/user', userController.create);
route.get('/user', userController.getAll);

module.exports = route;
