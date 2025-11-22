import express from "express";
import musicController from "../controllers/music-controller.js";

const router = express.Router();

router.route("/trending").get(musicController.getAllTrending);

export default router;
