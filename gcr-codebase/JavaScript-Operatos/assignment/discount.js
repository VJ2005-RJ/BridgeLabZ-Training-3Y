// Q8: Dynamic Discount Evaluator
function calculateTotal(cart) {
  var originalTotal = 0;
  var discountedItems = [];

  for (var i = 0; i < cart.length; i++) {
    var price = cart[i].price;
    originalTotal += price;

    if (cart[i].category === "electronics") {
      price = price - price * 0.10; // 10% off
    } else if (cart[i].category === "fashion") {
      price = price - price * 0.05; // 5% off
    }
    discountedItems.push(price);
  }

  var finalTotal = discountedItems.reduce(function (sum, p) { return sum + p; }, 0);

  // extra 5% if original cart value > 50000
  if (originalTotal > 50000) {
    finalTotal = finalTotal - finalTotal * 0.05;
  }

  console.log("Original total:", originalTotal);
  console.log("Final total   :", finalTotal);
}

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
calculateTotal(cart); // original 48100, no extra discount

// second test: cart above 50000 to show the extra 5%
calculateTotal([
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Phone", category: "electronics", price: 20000 }
]);
