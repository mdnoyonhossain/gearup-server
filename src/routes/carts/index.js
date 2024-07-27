const express = require("express");
const { createCart, findCart, deleteCart } = require("../../api/carts/controllers");
const router = express.Router()


router.post("/carts", createCart);

router.get("/carts", findCart );

router.delete("/carts/:id", deleteCart );



module.exports = router;