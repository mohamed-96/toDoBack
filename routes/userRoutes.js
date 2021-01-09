const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login', userController.user_login_post);
router.post('/signup', userController.user_signup_post);

module.exports = router;