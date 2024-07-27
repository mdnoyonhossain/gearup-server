const Cart = require("../../../models/Carts");

const createCart = async (req, res) => {
  const cartItem = new Cart(req.body); 
  try {
    const result = await cartItem.save(); 
    res.send(result);
  } catch (error) {
    res.status(500).send(error); 
  }
};

module.exports = createCart;
