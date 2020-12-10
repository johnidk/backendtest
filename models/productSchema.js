const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: [128, "Invalid length of characters, maximum is 128 characters"],
  },
  image: String,
  description: { type: String, required: true, lowercase: true },
  price: { type: Number, required: true },
  stock: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
