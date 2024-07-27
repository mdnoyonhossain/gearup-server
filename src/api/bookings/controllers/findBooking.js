const Booking = require("../../../models/Bookings");

const findBooking = async (req, res) => {
  try {
    const userEmail = req.query.userEmail;
    const result = await Booking.find({ userEmail: userEmail }).exec();

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = findBooking;
