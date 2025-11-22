import dot from "dotenv";
dot.config();
import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./utils/database.js";
import authRouter from "./routers/auth-router.js";
import musicRouter from "./routers/music-router.js";
import cors from "cors";

const server = express();

server.use(cors());
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
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
