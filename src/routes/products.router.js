import { Router } from "express";
import products from "../data/products.js";
import upload from "../middlewares/uploader.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", upload.single("thumbnail"), (req, res) => {
  const { title, description, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    title,
    description,
    price: Number(price),
    thumbnail: req.file ? `/uploads/${req.file.filename}` : "https://picsum.photos/200/200"
  };

  products.push(newProduct);

  res.redirect("/products");
});

export default router;