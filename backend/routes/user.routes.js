const { Router } = require('express');
const {createUserController, loginController, profileController, logoutController} = require('../controllers/user.controller.js');
const { body } = require('express-validator');
const { authUser } = require('../middle/authMiddle.js');

const router = Router();



router.post('/register',
    body('name').notEmpty().withMessage('Name is required'), // Add this line
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    createUserController);

router.post('/login',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    loginController);

router.get('/profile', authUser, profileController);

router.get('/logout', authUser, logoutController);

module.exports = router;