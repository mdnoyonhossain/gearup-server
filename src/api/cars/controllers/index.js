const createCar = require("./createCar");
const findByBrand = require("./findByBrand");
const findAllCar = require("./findAllCar");
const findOneCar = require("./findOneCar");
const updateCar = require("./updateCar");
const carRequests = require("./carRequests");
const deleteCar = require("./deleteCar");
const updateCarStatus = require("./updateCarStatus");
const findApprovedCar = require("./findApprovedCar");


module.exports={
    createCar,
    findByBrand,
    findAllCar,
    findOneCar,
    updateCar,
    carRequests,
    deleteCar,
    updateCarStatus,
    findApprovedCar
}