import express from "express";
import categoryController from '../controllers/categoryController.js';

const router = express.Router(); 

// http://localhost:3000/categories/
router.route('/').post(categoryController.createCategory);

export default router; 