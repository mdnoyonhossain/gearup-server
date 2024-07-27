const User = require("../../../models/Users");

const updateUserRole = async (req, res) => {
    const email = req.params.email;
    const userData = req.body;

    try {
        const user = await User.findOneAndUpdate(
            { email: email },
            {
                $set: {
                    ...userData,
                    timestamp: Date.now()
                }
            },
            { upsert: true, new: true } // Setting new: true ensures that the updated document is returned
        );

        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = updateUserRole;