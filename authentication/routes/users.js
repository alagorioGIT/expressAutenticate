var express = require('express');
var router = express.Router();
let userController = require('../controller/userController');

/* GET users listing. */
router.get('/', userController.index);
router.get('/login', userController.login);
router.get('/registro', userController.register);
router.post('/create', userController.create);
router.get('/recupero', userController.recover);

module.exports = router;
