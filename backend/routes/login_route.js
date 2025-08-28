const express = require('express');
const { login_controller } = require('../controllers/login_controller');
const routes = express.Router();

routes.post('/login', login_controller);

module.exports = routes;