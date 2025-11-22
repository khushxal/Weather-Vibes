import express from "express";
import authController from "../controllers/auth-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = express.Router();

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);

router.route("/user").get(authMiddleware, authController.userData);

export default router;
