import express from "express";
import ProductManager from "../dao/ProductManager.js";

const router = express.Router();
const productManager = new ProductManager();

router.get("/", async (req, res) => {
    try {
        const products = await productManager.getProducts();
        res.render("home", { products });
    } catch (error) {
        res.status(500).send("An error occurred while fetching products.");
    }
});

router.get("/realtimeproducts", (req, res) => {
    res.render("realTimeProducts");
});

router.get("/chat", (req, res) => {
    res.render("chat");
});

export default router;
