const Cars = require("../../../models/Cars");

const findAllCar = async (req, res) => {
    try {
      const cars = await Cars.find();
      res.send(cars);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

module.exports = findAllCar;