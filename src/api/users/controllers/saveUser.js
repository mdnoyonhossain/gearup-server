const User = require("../../../models/Users");

const saveUser =  async (req, res) => {
    const email = req.params.email;
    const userData = req.body;
  
    try {
      // Check if the user exists
      let user = await User.findOne({ email: email });
  
      console.log("User found? ----->", user);
  
      if (user) {
        // If user exists, send the user data
        return res.send(user);
      } else {
        // If user doesn't exist, create a new user
        userData.email = email; // Ensure email is set correctly
        userData.timestamp = Date.now(); // Add timestamp to the user data
  
        // Create a new user instance
        user = new User(userData);
  
        // Save the new user to the database
        await user.save();
  
        res.send(user);
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  module.exports=saveUser;