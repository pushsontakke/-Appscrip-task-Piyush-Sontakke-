
async function fetchProductData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
          console.log(products)
        displayProducts(products); 
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

function displayProducts(products) {
    const productsContainer = document.getElementById("products-grid");

    products.forEach(product => {
        console.log(product.title)
        const productCard = `
            <div class="product-card">
                <div class="card-img">
                <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="card-info">
                <p class="card-name">${product.title}</p>
                <div>
                <p class="card-price">Price: $${product.price}</p>
                <button class="cart-button">Add to Cart</button>
                </div>
                </div>
                
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

fetchProductData();
