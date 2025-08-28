const express = require('express');
const { signup_controller } = require('../controllers/signup_controller');
const signup_route = express.Router();

signup_route.post('/register', signup_controller);

module.exports = signup_route;