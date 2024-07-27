const User = require("../../../models/Users");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = getAllUser;
