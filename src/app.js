const express = require("express");
const connectDB = require("./db/connectDB");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();

// Import routes
const carRoutes = require('./routes/cars/index')
const paymentRoutes = require('./routes/payments/index')
const bookingRoutes = require('./routes/bookings/index')
const userRoutes = require('./routes/users/index')
const cartRoutes = require('./routes/carts/index')

// middleware
applyMiddleware(app);

// connect Db
connectDB();



// routes
app.use(carRoutes)
app.use(paymentRoutes)
app.use(bookingRoutes)
app.use(userRoutes)
app.use(cartRoutes)


// server start point
app.get("/", (req, res) => {
    res.send("our server is running");
  });
  
  app.all("*",  (req, res,next) => {
      const error = new Error(`The requested url is invalid: [${req.url}] `)
      error.status = 404
      next(error)
  })
  
  app.use((err, req, res, next) => {
      res.status(err.status || 500).json({
          message: err.message
      })
  })
  
  // Define the port
  const PORT = process.env.PORT || 5000;
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });