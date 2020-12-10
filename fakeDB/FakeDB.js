const products = require("./data/productData");
const Product = require("../models/productSchema");

class FakeDB {
  clean() {
    return Product.deleteMany({});
  }

  addData() {
    return Product.create(products);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = FakeDB;
