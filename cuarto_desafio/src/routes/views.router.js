    import { Router } from "express";
    import ProductManager from "../managers/ProductManager.js";
    import { __dirname } from "../utils.js";

    const managerp = new ProductManager(__dirname + "/files/products.json");

    const router = Router();

    router.get("/", async (req, res) => {
    const listproducts = await managerp.getProducts({});
    console.log(listproducts);
    res.render("home", { listproducts });
    });

    router.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");
    });

    export default router;