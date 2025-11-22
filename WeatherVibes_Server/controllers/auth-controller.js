import user from "../models/user.js";

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const isUser = await user.findOne({ email: email });
    if (isUser && (await isUser.comparePassword(password))) {
      res.status(200).json({
        msg: "Logged In success",
        token: await isUser.generateToken(),
      });
    } else {
      res.status(401).json({ msg: "Invalid Credential" });
    }
  } catch (error) {
    console.log(error);
  }
}

async function register(req, res) {
  try {
    const { email, name, password, dob } = req.body;
    const isUserExists = await user.findOne({ email: email });
    if (isUserExists) {
      res.json({ msg: "User already exists." });
    } else {
      const addUser = await user.create({
        email: email,
        name: name,
        password: password,
        dob: dob,
      });
      res.status(201).json({
        user: addUser,
        msg: "Account created successfully. Redirecting to login.",
        token: await addUser.generateToken(),
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function userData(req, res) {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    console.log(error);
  }
}

export default { login, register, userData };
