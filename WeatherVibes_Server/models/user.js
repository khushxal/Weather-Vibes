import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  try {
    if (!this.isModified("password")) {
    } else {
      const round = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(this.password, round);
      this.password = hashedPassword;
    }
  } catch (error) {
    console.log(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      userId: this._id,
      email: this.email,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

const user = new mongoose.model("user", userSchema);

export default user;
