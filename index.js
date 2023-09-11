// Function to add a new product
function addProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;

    if (!productName || !productPrice) {
        alert("Please enter both product name and price.");
        return;
    }

    // Create a product object
    const product = { name: productName, price: productPrice };

    // Retrieve existing products from local storage or create an empty array
    const products = JSON.parse(localStorage.getItem("products")) || [];

    // Add the new product to the array
    products.push(product);

    // Store the updated array back in local storage
    localStorage.setItem("products", JSON.stringify(products));

    // Reset the input fields
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";

    // Refresh the product list
    displayProductList();
}

// Function to delete a product
function deleteProduct(index) {
    // Retrieve existing products from local storage
    const products = JSON.parse(localStorage.getItem("products")) || [];

    // Remove the product at the specified index
    products.splice(index, 1);

    // Store the updated array back in local storage
    localStorage.setItem("products", JSON.stringify(products));

    // Refresh the product list
    displayProductList();
}

// Function to display the product list
function displayProductList() {
    // Retrieve existing products from local storage
    const products = JSON.parse(localStorage.getItem("products")) || [];

    // Get the element to display the product list
    const productList = document.getElementById("productList");

    // Clear the existing content
    productList.innerHTML = "";

    // Iterate through the products and create product cards
    products.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <div class="product-card-info">
                <h3>${product.name}</h3>
                <span>Price: $${product.price}</span>
            </div>
            <button class="product-card-price" onclick="deleteProduct(${index})">Delete</button>
        `;
        productList.appendChild(productCard);
    });
}

// Display the initial product list
displayProductList();

// Add event listener for the "Add Product" button click
document.getElementById("addProductBtn").addEventListener("click", function () {
    addProduct();
});
