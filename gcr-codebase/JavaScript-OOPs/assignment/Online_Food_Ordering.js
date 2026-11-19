const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Sandwich", price: 100 },
    { name: "Pasta", price: 180 }
];

function calculateBill(orderItems) {
    let prices = orderItems.map(item => {
        let food = menu.find(menuItem => menuItem.name === item);

        if (!food) {
            throw new Error(item + " is not available in the menu.");
        }

        return food.price;
    });

    return prices.reduce((total, price) => total + price, 0);
}

try {
    let bill = calculateBill(["Burger", "Pizza", "Pasta"]);
    console.log("Total bill: Rs.", bill);
} catch (error) {
    console.log("Order failed:", error.message);
}
