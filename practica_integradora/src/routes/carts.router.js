import { Router } from "express";
import CartManager from "../dao/CartManager.js";

const cartsRouter = Router();
const cartManager = new CartManager();

cartsRouter.post("/", async (req, res) => {
    const newCartCreated = await cartManager.createCart();

    if (newCartCreated) {
        res.send({ status: "success", message: "The cart was created successfully!" });
    } else {
        res.status(500).send({ status: "error", message: "Error! Could not create the cart!" });
    }
});

cartsRouter.get("/:cartId", async (req, res) => {
    const cartId = req.params.cartId;
    const cart = await cartManager.getCart(cartId);

    if (cart) {
        res.send({ products: cart.products });
    } else {
        res.status(400).send({ status: "error", message: "Error! Cart ID not found!" });
    }
});

cartsRouter.post("/:cartId/products/:productId", async (req, res) => {
    const cartId = req.params.cartId;
    const productId = req.params.productId;
    const productAdded = await cartManager.addProductToCart(cartId, productId);

    if (productAdded) {
        res.send({ status: "success", message: "The product was added to the cart successfully!" });
    } else {
        res.status(400).send({ status: "error", message: "Error! Could not add the product to the cart!" });
    }
});

export default cartsRouter;
