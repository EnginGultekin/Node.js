import asynchandler from 'express-async-handler';
import Course from '../models/Course.js';

const createCourse = asynchandler(async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json({
            status: 'success',
            course,
        });
    } catch (error) {
        console.log("Error: ", error)
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
});

const getAllCourses = asynchandler(async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).render('courses', {
            courses,
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
        const course = await Course.findOne({ slug: req.params.slug })
        res.status(200).render('course', {
            course,
            page_name: 'courses',
        });
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
};