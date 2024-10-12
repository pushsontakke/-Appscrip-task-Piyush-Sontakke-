
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
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

fetchProductData();
