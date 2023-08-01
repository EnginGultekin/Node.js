import express from "express";
import authController from "../controllers/authController.js";
import authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router();

// http://localhost:3000/users/signup
router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage);

export default router;  