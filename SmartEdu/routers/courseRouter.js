import express from "express";
import courseController from '../controllers/courseController.js';

const router = express.Router(); 

// http://localhost:3000/courses/
router.route('/').post(courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);

export default router; 