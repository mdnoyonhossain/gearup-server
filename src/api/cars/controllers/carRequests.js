const Cars = require("../../../models/Cars");

const carRequests =  async (req, res) => {
    const email = req.query.email;
  
    try {
      const result = await Cars.find({ email: email });
      res.json(result);
    } catch (error) {
      console.error('Error fetching cars:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
    module.exports = carRequests;