const Cars = require("../../../models/Cars");

const updateCar = async (req, res) => {
    const id = req.params.id;
    const updatedCar = req.body;
  
    try {
      const result = await Cars.updateOne({ _id: id }, updatedCar);
      if (result.nModified === 1) {
        res.json({ message: 'Car updated successfully' });
      } else {
        res.status(404).json({ message: 'Car not found' });
      }
    } catch (error) {
      console.error('Error updating car:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
module.exports = updateCar;