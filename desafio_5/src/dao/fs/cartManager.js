import fs from "fs";

class CartManager {
    constructor() {
        this.carts = [];
        this.path = "Cart.json";
        this.createFile();
    }

    createFile() {
        if (!fs.existsSync(this.path)) {
            fs.writeFileSync(this.path, JSON.stringify(this.carts));
        }
    }

    createCart() {
        const newCart = { id: this.generateId(), products: [] };
        this.carts.push(newCart);
        this.saveCart();
        console.log("Cart created!");
        return true;
    }

    getCart(cartId) {
        this.carts = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        return this.carts.find(cart => cart.id === cartId);
    }

    getAllCarts() {
        const carts = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        return carts;
    }

    generateId() {
        let max = 0;
        const carts = this.getAllCarts();

        carts.forEach(cart => {
            if (cart.id > max) {
                max = cart.id;
            }
        });

        return max + 1;
    }

    saveCart() {
        fs.writeFileSync(this.path, JSON.stringify(this.carts));
    }

    addProductToCart(cartId, productId) {
        this.carts = this.getAllCarts();
        const cart = this.carts.find(item => item.id === cartId);
        const product = cart.products.find(item => item.product === productId);

        if (product) {
            product.quantity += 1;
        } else {
            cart.products.push({ product: productId, quantity: 1 });
        }

        this.saveCart();
        console.log("Product added to cart!");
        return true;
    }
}

export default CartManager;
