const products = [
    { id: 1, name: "Pen", category: "Stationery", price: 10, stock: 5 },
    { id: 2, name: "Notebook", category: "Stationery", price: 50, stock: 20 },
    { id: 3, name: "Mouse", category: "Electronics", price: 500, stock: 3 },
    { id: 4, name: "Keyboard", category: "Electronics", price: 900, stock: 8 },
    { id: 5, name: "Bottle", category: "Home", price: 150, stock: 2 }
];

function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + product.price * product.stock;
    }, 0);
}

function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock:", getLowStockProducts());
console.log("Sorted by price:", sortProductsByPrice());
console.log("Inventory value: Rs.", calculateTotalInventoryValue());
console.log("Products by category:", groupByCategory());
