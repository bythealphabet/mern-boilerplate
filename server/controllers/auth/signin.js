import User from "../../models/user.model";
import jwt from "jsonwebtoken";
import config from "./../../../config/config";

export const signin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status("401").json({ error: "User not found" });
    if (!user.authenticate(req.body.password)) {
      return res
        .status("401")
        .send({ error: "Email and password don't match." });
    }
    const token = jwt.sign({ _id: user._id }, config.jwtSecret);
    res.cookie("t", token, { expire: new Date() + 9999 });
    user.hashed_password = undefined;
    user.salt = undefined;

    return res.json({
      token,
      user,
    });
  } catch (err) {
    return res.status("401").json({ error: "Could not sign in" });
  }
};
