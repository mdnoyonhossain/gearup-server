const User = require("../../../models/Users");

const getRole = async (req, res) => {
    const email = req.params.email;
  
    try {
      // Find the user based on the email
      const user = await User.findOne({ email });
  
      if (!user) {
        // If user not found
        return res.status(404).send("User not found");
      }
  
      // Send the user data
      res.send(user);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  }

module.exports = getRole;