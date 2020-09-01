var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController');
const sessionUserCheck = require('../middlewares/sessionUserCheck');

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

router.get('/register',controller.register);
router.post('/register',registerValidator,controller.processRegister);

router.get('/login',controller.login);
router.post('/login',loginValidator,controller.processLogin);

router.get('/profile',sessionUserCheck, controller.profile);

module.exports = router;
