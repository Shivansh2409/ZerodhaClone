const userModel = require('../model/user.model.js');

const createUser = async ({
    name,email,password
}) => {

    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        name,
        email,
        password: hashedPassword
    });

    return user;
}

module.exports = { createUser };
