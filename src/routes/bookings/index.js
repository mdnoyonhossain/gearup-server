var express = require('express');
const { createBooking, findBooking } = require('../../api/bookings/controllers');

 
var router = express.Router()

router.post("/bookings", createBooking);
router.get("/bookings", findBooking);




module.exports = router;