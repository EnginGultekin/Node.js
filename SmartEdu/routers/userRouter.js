import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router(); 

// http://localhost:3000/user/signup
router.route('/signup').post(authController.createUser);

export default router; 