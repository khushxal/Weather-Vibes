import express from "express";

const server = express();

app.get("/", function (req, res) {
  res.send("Radhe Radhe");
});

server.listen(5000, function () {
  console.log("Server is runnning :  http://localhost:5000");
});
