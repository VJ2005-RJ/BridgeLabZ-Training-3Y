"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(coupon) {
        if (!/^(SAVE20|DISC10)$/.test(coupon)) {
            throw new Error("Invalid coupon. Use SAVE20 or DISC10.");
        }
        const discountPercent = coupon === "SAVE20" ? 20 : 10;
        return this.getTotal() * (1 - discountPercent / 100);
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 600, 2);
cart.addItem("USB Cable", 250, 3);

console.log("Cart items:", cart.items);
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);

const coupon = "SAVE20";
try {
    const finalTotal = cart.applyCoupon(coupon);
    console.log(`Coupon applied: ${coupon}`);
    console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
} catch (error) {
    console.log(error.message);
}
