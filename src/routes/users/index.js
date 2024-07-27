var express = require("express");
const { saveUser, getRole, getAllUser, updateUserRole } = require("../../api/users/controllers");

var router = express.Router()


router.put("/users/:email", saveUser);
router.get("/user/:email", getRole);
router.get("/users",getAllUser )
router.put("/users/update/:email", updateUserRole)
module.exports = router;