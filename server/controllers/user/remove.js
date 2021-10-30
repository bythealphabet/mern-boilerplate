import errorHandler from "../../helpers/dbErrorHandler";
import User from "../../models/user.model";

export const remove = async (req, res) => {
  try {
    let user = req.profile;
    if (!user.authenticate(req.body.password)) {
      return res.status("401").send({ error: "Incorect Password." });
    }

    let deletedUser = await user.remove();
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;
    res.json({ deletedUser, success: true });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
