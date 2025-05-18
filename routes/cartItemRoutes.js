const express = require("express");
const protect = require("../middlewares/authMiddleware");
const {
  addToCart,
  getCart,
  updateCartItem,
  deleteCartItem,
} = require("../controllers/cartItemController");

const cartItemRoutes = express.Router();

// Add a product to the cart
cartItemRoutes.post("/", protect, addToCart);

// Retrieve all cart items for the authenticated user
cartItemRoutes.get("/", protect, getCart);

// Update the quantity of a specific cart item
cartItemRoutes.put("/", protect, updateCartItem);

// Delete a specific cart item from the cart
cartItemRoutes.delete("/", protect, deleteCartItem);

module.exports = cartItemRoutes;
