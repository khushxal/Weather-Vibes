import express from "express";
import authController from "../controllers/auth-controller.js";
const router = express.Router();

router.route("/login").get(authController.login);

router.route("/register").get(authController.register);

export default router;
