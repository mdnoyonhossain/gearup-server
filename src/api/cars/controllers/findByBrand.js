const Cars = require("../../../models/Cars");

const findByBrand = async (req, res) => {
  try {
    const brand = req.params.brand;
    // Use the Mongoose model to find cars by brand
    const cars = await Cars.find({ brand: brand });

    res.send(cars);
  } catch (error) {
    // Handle errors if any
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = findByBrand;
