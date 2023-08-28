import { Router } from "express";
import CartManager from "../dao/CartManager.js";

const cartsRouter = Router();
const cartManager = new CartManager();

cartsRouter.post("/", async (req, res) => {
    try {
        const newCartCreated = await cartManager.createCart();

        if (newCartCreated) {
            res.send({ status: "success", message: "The cart was created successfully!" });
        } else {
            res.status(500).send({ status: "error", message: "Error! Could not create the cart!" });
        }
    } catch (error) {
        res.status(500).send({ status: "error", message: "An error occurred while creating the cart." });
    }
});

cartsRouter.get("/:cartId", async (req, res) => {
    const cartId = req.params.cartId;
    try {
        const cart = await cartManager.getCart(cartId);

        if (cart) {
            res.send({ products: cart.products });
        } else {
            res.status(400).send({ status: "error", message: "Error! Cart ID not found!" });
        }
    } catch (error) {
        res.status(500).send({ status: "error", message: "An error occurred while fetching the cart." });
    }
});

cartsRouter.post("/:cartId/products/:productId", async (req, res) => {
    const cartId = req.params.cartId;
    const productId = req.params.productId;
    
    try {
        const productAdded = await cartManager.addProductToCart(cartId, productId);

        if (productAdded) {
            res.send({ status: "success", message: "The product was added to the cart successfully!" });
        } else {
            res.status(400).send({ status: "error", message: "Error! Could not add the product to the cart!" });
        }
    } catch (error) {
        res.status(500).send({ status: "error", message: "An error occurred while adding the product to the cart." });
    }
});

export default cartsRouter;
