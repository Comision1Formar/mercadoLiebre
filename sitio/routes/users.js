var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController');
const sessionUserCheck = require('../middlewares/sessionUserCheck');

router.get('/register',controller.register);
router.post('/register',controller.processRegister);

router.get('/login',controller.login);
router.post('/login',controller.processLogin);

router.get('/profile',sessionUserCheck, controller.profile);

module.exports = router;
