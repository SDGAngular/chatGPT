const express = require('express');
const chatRouter = express.Router();

const chatController = require('../controller/chatController');

chatRouter.route('/getResponse').post(chatController.processChat);

module.exports = chatRouter
