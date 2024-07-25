import jwt from "jsonwebtoken";
import user_model from "../models/user.js";

async function authMiddleware(req, res, next) {
  try {
    const bearerToken = req.header("Authorization");
    if (!bearerToken) {
      console.log("This is inside when token not found");
      res.status(401).json({ msg: "Unauthorized Access" });
    }
    const token = bearerToken.replace("Bearer ", "");
    const isVerified = jwt.verify(token, process.env.SECRET_KEY);
    const user = await user_model.findOne({ email: isVerified.email });
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized access" });
  }
}

export default authMiddleware;
