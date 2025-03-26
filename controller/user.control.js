import User from "../models/user.model.js";
import { hashpw, cmppw } from "../util/pw.hash.js";
import { createtoken } from "../util/jwttoken.js";

const handlesignup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await User.findOne({ email: email });

    if (existing)
      return res.status(409).json({ message: "user already exists" });

    const hashedpassword = await hashpw(password);
    const newUser = new User({ email: email, password: hashedpassword });
    await newUser.save();

    res.status(201).json({ message: "User has been created", user: newUser });
  } catch (err) {
    res.status(500).json({ message: `Error : ${err}` });
  }
};

const handlelogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await User.findOne({ email: email });
    if (!existing)
      return res.status(404).json({ message: "User does not exist" });

    const isMatch = await cmppw(password, existing.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = createtoken(existing);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({
        message: "Login Successful",
        email: existing.email,
        createdAt: existing.createdAt,
        id: existing._id,
      });
  } catch (err) {
    return res.status(500).json({ message: `Server Error + ${err}` });
  }
};

const handlelogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    return res.status(400).json({ message: "Logout failed" });
  }
};

export { handlesignup, handlelogin, handlelogout };
