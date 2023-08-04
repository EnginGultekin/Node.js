import asynchandler from 'express-async-handler';
import Course from '../models/Course.js';
import User from '../models/User.js'
import Category from '../models/Category.js'

const createCourse = asynchandler(async (req, res) => {
    try {
        const course = await Course.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            user: req.session.userID
        });
        res.status(201).redirect('/courses')
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
});

const getAllCourses = asynchandler(async (req, res) => {
    try {

        const categorySlug = req.query.categories;
        const category = await Category.findOne({ slug: categorySlug });
        let filter = {};

        if (categorySlug) {
            filter = { category: category._id }
        }

        // sort('-createdAt') fonsyonu en güncel olandan eskiye doğru sıralar
        const courses = await Course.find(filter).sort('-createdAt').populate('user');
        const categories = await Category.find();
        res.status(200).render('courses', {
            courses,
            categories,
            page_name: 'courses',
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
});

const getCourse = asynchandler(async (req, res) => {
    try {
        // populate('user') fonksyonu içinde bulundurduğu user id'sini 
        // kullanarak o kullanıcının tüm özeliiklerini almaya yarıyor. 
        const user = await User.findById(req.session.userID);
        const course = await Course.findOne({ slug: req.params.slug }).populate('user')
        res.status(200).render('course', {
            course,
            page_name: 'courses',
            user,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
});

const enrollCourse = asynchandler(async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        await user.courses.push({ _id: req.body.course_id });
        await user.save();

        res.status(200).redirect('/users/dashboard');
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
});


const releaseCourse = asynchandler(async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        await user.courses.pull({ _id: req.body.course_id });
        await user.save();

        res.status(200).redirect('/users/dashboard');
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
});

export default {
    createCourse,
    getAllCourses,
    getCourse,
    enrollCourse,
    releaseCourse,
};
