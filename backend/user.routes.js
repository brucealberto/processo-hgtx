const express = require('express');
const userController = require('./controllers/userController');

const route = express.Router();

route.post('/user', userController.create);
route.get('/user', userController.getAll);
route.get('/user/:id', userController.getById);
route.put('/user/:id', userController.update);

module.exports = route;
