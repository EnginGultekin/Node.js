import express from "express";
import courseController from '../controllers/courseController.js';

const router = express.Router();

// http://localhost:3000/courses
router.route('/courses').post(courseController.createCourse);

export default router;