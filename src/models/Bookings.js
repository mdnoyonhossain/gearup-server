const { Schema, model } = require("mongoose");

const BookingSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
   image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  carId: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
}, { versionKey: false });

const Booking = model("Booking", BookingSchema);
module.exports = Booking;
