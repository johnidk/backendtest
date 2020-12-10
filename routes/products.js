const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
} = require("../controllers/productController");

router.get("", getProducts);

router.get("/:productId", getProductById);

router.post("", createProduct);

// router.delete("/:id", deleteProduct);

// router.patch("/:id", updateProduct);

module.exports = router;
