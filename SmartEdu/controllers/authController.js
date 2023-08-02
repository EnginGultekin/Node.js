import asynchandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const createUser = asynchandler(async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).redirect('/login');
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
        const user = await User.findOne({ email });

        if (user) {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same) {
                    // User Session
                    req.session.userID = user._id;
                    res.status(200).redirect('/users/dashboard');
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
});

const logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};

// Kullanıcı giriş yaptıktan sonra görünen bir sayfa ve 
// kullanıcı rollerine göre şekilleneceği için buırda tanımlı
const getDashboardPage = asynchandler(async (req, res) => {
    const user = await User.findOne({ _id: req.session.userID })
    res.status(200).render('dashboard', {
        page_name: 'dashboard',
        user,
    });
});

export default {
    createUser,
    loginUser,
    logoutUser,
    getDashboardPage,
};
