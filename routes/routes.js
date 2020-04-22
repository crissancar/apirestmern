const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


module.exports = function(){

    router.post('/users', userController.new);

    return router;
}