import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

const user = new mongoose.model("user", userSchema);

export default user;
