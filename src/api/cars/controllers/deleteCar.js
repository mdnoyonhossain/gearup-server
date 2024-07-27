const Cars = require("../../../models/Cars");

const deleteCar = async (req, res) => {
    const id = req.params.id;
  
    try {
      const result = await Cars.deleteOne({ _id: id });
      if (result) {
        res.json({ message: 'Car deleted successfully' });
      } else {
        res.status(404).json({ message: 'Car not found' });
      }
    } catch (error) {
      console.error('Error deleting car:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  module.exports = deleteCar;