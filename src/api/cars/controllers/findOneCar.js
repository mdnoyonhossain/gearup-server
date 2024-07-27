const Cars = require("../../../models/Cars");

const findOneCar = async (req, res,next) => {
  try {
    const id = req.params.id;
    const result = await Cars.findById(id);
    res.send(result);
  } catch (error) {
   next(error);
  }
};

module.exports = findOneCar