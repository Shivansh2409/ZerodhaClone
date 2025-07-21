const userModel = require('../model/user.model.js');
const {createUser} = require('../services/user.service.js');
const { validationResult } = require('express-validator');
const redisClient = require('../services/redis.service.js');
const createUserController = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const user = await createUser(req.body);

        const token = await user.generateJWT();

        delete user._doc.password;
        res.cookie('token', token, {
            httpOnly: true,
        });

        res.status(201).json({ user, token });
    } catch (error) {
        // const errorMessage = 'Email already exists';
        console.log("Error creating user:", error);
        
        res.status(401).json({ error: 'Email already exists' });
        // res.status(400).send(error.message);
    }
};

const loginController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({
                errors: 'Invalid credentials'
            })
        }

        const isMatch = await user.isValidPassword(password);

        if (!isMatch) {
            return res.status(401).json({
                errors: 'Invalid credentials'
            })
        }

        const token = await user.generateJWT();

        // delete user._doc.password;
        res.cookie('token', token, {
            httpOnly: true,
        });

        res.status(200).json({ user, token });


    } catch (err) {

        console.log(err);

        res.status(400).send(err.message);
    }
}

const profileController = async (req, res) => {

    res.status(200).json({
        user: req.user
    });

}

const logoutController = async (req, res) => {
    try {

        const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

        redisClient.set(token, 'logout', 'EX', 60 * 60 * 24);

        res.status(200).json({
            message: 'Logged out successfully'
        });


    } catch (err) {
        console.log(err);
        console.error("Error during logout:");
        res.status(400).send(err.message);
    }
}

module.exports = {
    createUserController,
    loginController,
    profileController,
    logoutController
};
