const express = require('express');
const authRouter = express.Router();

const userController = require('../controller/userController');

authRouter.route('/register').post(userController.register);


authRouter.route('/login').post(userController.login);

module.exports = authRouter
