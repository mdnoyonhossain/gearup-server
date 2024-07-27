var express = require("express");
const { createCar, findAllCar, findOneCar, updateCar, carRequests, deleteCar, updateCarStatus, findApprovedCar } = require("../../api/cars/controllers");
var router = express.Router();

router.post('/cars',createCar )
router.get('/cars/all/requests',findAllCar )
router.get('/cars',findApprovedCar )
router.get('/cars/:id',findOneCar );
router.put('/cars/update/:id',updateCar );
router.put("/cars/approve/:id", updateCarStatus);

router.delete("/cars/delete/:id", deleteCar );




// router.put("/courses/update/:id", updateCourse);


module.exports = router;