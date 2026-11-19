"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    getDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Keyboard", 1500, "Electronics"),
    new Product(2, "Notebook", 120, "Stationery"),
    new Product(3, "Headphones", 2200, "Electronics"),
    new Product(4, "Bottle", 450, "Home")
];

products[0].applyDiscount(10);

console.log("All products:");
products.forEach(product => console.log(product.getDetails()));

console.log("\nProducts priced above ₹1000:");
products.filter(product => product.price > 1000)
    .forEach(product => console.log(product.getDetails()));
