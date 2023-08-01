import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// http://localhost:3000/users/signup
router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authController.getDashboardPage); 

export default router;  