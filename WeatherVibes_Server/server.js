import express from "express";
import authRouter from "./routers/auth-router.js";
import musicRouter from "./routers/music-router.js";

const server = express();

server.use("/api/auth", authRouter);
server.use("/api/music", musicRouter);

server.get("*", function (req, res) {
  res.send("<h1>Not Found 404</h1>");
});

server.listen(5000, function () {
  console.log("Server is runnning : http://localhost:5000");
});
