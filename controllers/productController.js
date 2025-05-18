const Product = require("../models/Product");

// GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

// GET /api/products/:productId
const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

// POST /api/products
const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      message: "Failed to create product",
    });
  }
};

// PUT /api/products/:productId
const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      message: "Failed to update product",
    });
  }
};

// DELETE /api/products/:productId
const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      message: "Failed to delete product",
    });
  }
};

// ✅ Correct single export
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
