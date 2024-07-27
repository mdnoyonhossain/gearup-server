const Cars = require("../../../models/Cars");

const updateCarStatus = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedCar = await Cars.findOneAndUpdate(
      { _id: id, status: { $ne: "approved" } },
      { $set: { status: "approved" } },
      { new: true } // This option returns the modified document
    );

    if (!updatedCar) {
      return res.status(404).send("Course not found or already approved.");
    }

    res.send(updatedCar);
  } catch (error) {
    console.error("Error updating course status:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateCarStatus;
