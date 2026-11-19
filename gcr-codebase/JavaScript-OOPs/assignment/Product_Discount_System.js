function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
};

let product1 = new Product("Keyboard", 1000);
let product2 = new Product("Mouse", 600);
let product3 = new Product("Headphones", 2000);

console.log(product1.name, "After discount:", product1.applyDiscount(10));
console.log(product2.name, "After discount:", product2.applyDiscount(15));
console.log(product3.name, "After discount:", product3.applyDiscount(20));
