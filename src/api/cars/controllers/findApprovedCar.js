const Cars = require("../../../models/Cars");

 

const findApprovedCar = async (req, res) => {
    try {
        const result = await Cars.find({ status: "approved" });
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = findApprovedCar;
