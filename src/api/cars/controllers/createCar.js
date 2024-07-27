const Cars = require("../../../models/Cars");

const createCar = async (req, res) => {
  try {
    const carDetails = req.body;
    const newCar = new Cars({
      ...carDetails,
      status: "pending",
    });
   // Save the new course to the database
   const result = await newCar.save();

   res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = createCar;
