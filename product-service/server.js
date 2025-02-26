const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://mongo:27017/products", { useNewUrlParser: true, useUnifiedTopology: true });
const Product = mongoose.model("Product", new mongoose.Schema({ name: String, price: Number }));

const updateSimpleService = async () => {
  await new Product({ name: 'Product 1', price: 50 }).save();
};

updateSimpleService();

app.get("/products", async (req, res) => res.json(await Product.find()));
app.post("/products", async (req, res) => res.json(await new Product(req.body).save()));

app.listen(5001, () => console.log("Product service running on port 5001"));
