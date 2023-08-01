import asynchandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const createUser = asynchandler(async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            user,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
});

const loginUser = asynchandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })

        if (user) {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same) {
                    // User Session
                    req.session.userID = user._id;
                    res.status(200).redirect('/');
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
});

export default {
    createUser,
    loginUser,
};
