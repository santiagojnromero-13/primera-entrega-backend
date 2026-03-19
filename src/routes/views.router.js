import { Router } from "express";
import products from "../data/products.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", {
    title: "Inicio",
    message: "Bienvenido a mi primera app con Express y Handlebars"
  });
});

router.get("/products", (req, res) => {
  res.render("products", {
    title: "Lista de productos",
    products
  });
});

router.get("/add-product", (req, res) => {
  res.render("addProduct", {
    title: "Agregar producto"
  });
});

export default router;