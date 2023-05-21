const User = require("../models/userModel");

// update User
exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
// delete User
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("User has been delete!");
  } catch (error) {
    next(error);
  }
};
// get User
exports.getUser = async (req, res, next) => {
  try {
    const user = await user.findById(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
// get all User
exports.getAllUser = async (req, res, next) => {
  try {
    const allUsers = await User.find();

    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};
