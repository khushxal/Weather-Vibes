import dot from "dotenv";
dot.config();
import express from "express";
import { connectDB } from "./utils/database.js";
import authRouter from "./routers/auth-router.js";
import musicRouter from "./routers/music-router.js";

const server = express();

server.use("/api/auth", authRouter);
server.use("/api/music", musicRouter);

server.get("*", function (req, res) {
  res.send("<h1>Not Found 404</h1>");
});

connectDB().then(function () {
  server.listen(5000, function () {
    console.log(`Server is runnning : ${process.env.HOST_URI}`);
  });
});
