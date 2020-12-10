const Product = require("../models/productSchema");

exports.getProducts = (req, res) => {
  Product.find({}, (error, foundProducts) => {
    if (error) {
      return res.status(422).send({
        errors: [{ title: "Product error", message: "Cannot retreive" }],
      });
    }

    return res.json(foundProducts);
  });
};

exports.getProductById = (req, res) => {
  const { productId } = req.params;

  Product.findById(productId, (error, foundProduct) => {
    if (error) {
      return res.status(422).send({
        errors: [{ title: "Product error", message: "Cannot retreive" }],
      });
    }
    return res.json(foundProduct);
  });
};

exports.createProduct = (req, res) => {
  const productData = req.body;

  Product.create(productData, (error, createdProduct) => {
    if (error) {
      return res.status(422).send({
        errors: [
          { title: "Product Error!", message: "Cannot post product data!" },
        ],
      });
    }

    return res.json({
      message: `Rental with id: ${createdProduct._id} was added!`,
    });
  });
};
