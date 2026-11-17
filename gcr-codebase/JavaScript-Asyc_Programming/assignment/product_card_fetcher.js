// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Run in a browser console or from an HTML page. Uses the Fake Store API.
// The optional card-building section runs only when a #products element exists.

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        // fetch() does not reject automatically for HTTP error status codes.
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }

        const products = await response.json();

        products.forEach(product => {
            console.log("Product:", product.title);
            console.log("Price: $" + Number(product.price).toFixed(2));
            console.log("Image:", product.image);
            console.log("------------------------------");
        });

        // Optional bonus: dynamically create HTML product cards.
        const productContainer = document.querySelector("#products");
        if (productContainer) {
            productContainer.replaceChildren();

            products.forEach(product => {
                const card = document.createElement("article");
                card.className = "product-card";

                const image = document.createElement("img");
                image.src = product.image;
                image.alt = product.title;
                image.width = 120;

                const title = document.createElement("h3");
                title.textContent = product.title;

                const price = document.createElement("p");
                price.textContent = "$" + Number(product.price).toFixed(2);

                card.append(image, title, price);
                productContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

fetchAndDisplayProducts();

// Optional HTML setup for the bonus:
// <div id="products"></div>
// Add CSS for .product-card if you want to style the cards.
