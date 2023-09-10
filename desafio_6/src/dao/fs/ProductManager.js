import fs from "fs";

class ProductManager {
    constructor() {
        this.products = [];
        this.path = "Products.json";
        this.createFile();
    }

    createFile() {
        if (!fs.existsSync(this.path)) {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
        }
    }

    addProduct(product) {
        if (this.validateCode(product.code)) {
            console.log("Error! Code exists!");
            return false;
        } else {
            const newProduct = { id: this.generateId(), ...product };
            this.products = this.getProducts();
            this.products.push(newProduct);
            this.saveProducts();
            console.log("Product added!");
            return true;
        }
    }

    updateProduct(id, product) {
        this.products = this.getProducts();
        const pos = this.products.findIndex(item => item.id === id);

        if (pos > -1) {
            this.products[pos] = { ...this.products[pos], ...product };
            this.saveProducts();
            console.log("Product updated!");
            return true;
        } else {
            console.log("Not found!");
            return false;
        }
    }

    deleteProduct(id) {
        this.products = this.getProducts();
        const pos = this.products.findIndex(item => item.id === id);

        if (pos > -1) {
            this.products.splice(pos, 1);
            this.saveProducts();
            console.log("Product #" + id + " deleted!");
            return true;
        } else {
            console.log("Not found!");
            return false;
        }
    }

    getProducts() {
        const products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        return products;
    }

    getProductById(id) {
        this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        return this.products.find(item => item.id === id) || "Not found";
    }

    validateCode(code) {
        return this.products.some(item => item.code === code);
    }

    generateId() {
        let max = 0;
        const products = this.getProducts();

        products.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }

    saveProducts() {
        fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
}

export default ProductManager;
