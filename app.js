const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/dev-keys");

// routes
const productRoutes = require("./routes/products");

//models
const Product = require("./models/productSchema");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to db");
  }
);

// middleawre
app.use(bodyParser.json());

// Api routes
app.use("/api/v1/products", productRoutes);

// routes

app.listen(PORT, (req, res) => {
  console.log("sever is listening on port " + PORT);
});
