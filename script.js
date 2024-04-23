console.log('====================================');
console.log("Connected");
console.log('====================================');

function addProductCard(parentContainer, productData) {
    // Create product card element
    const productCard = document.createElement('div');
    productCard.classList.add('product');
    
    // Image for the card
    const productImage = document.createElement('img');
    productImage.src = productData.image;
    productImage.alt = productData.title;
    productImage.classList.add('product-image'); // Add a class to the image


    // Create Div 1
    const div1 = document.createElement('div');
    div1.classList.add('product-details');

    const badgeButton = document.createElement('button');
    badgeButton.classList.add('badge');
    if (productData.badge_text) {
        badgeButton.textContent = productData.badge_text;
        productCard.appendChild(badgeButton);
    }

    // Create product name element
    const productName = document.createElement('h3');
    productName.textContent = (productData.title.length > 20) ? productData.title.slice(0, 20) + "..." : productData.title;

    // Create product vendor element
    const productVendor = document.createElement('p');
    productVendor.textContent = `${productData.vendor}`;

    // Append elements to Div 1
    div1.appendChild(productName);
    div1.appendChild(productVendor);

    // Create Div 2
    const div2 = document.createElement('div');
    div2.classList.add('price-details');

    // Create product price element
    const productPrice = document.createElement('p');
    productPrice.textContent = `Rs ${productData.price}`;


    const regularPrice = parseFloat(productData.price);
    const comparePriceValue = parseFloat(productData.compare_at_price);
    const discountPercentage = ((1 - (regularPrice / comparePriceValue )) * 100).toFixed(2);
    productDiscount = document.createElement('p');
    productDiscount.textContent = `${Math.round(discountPercentage)}% off`;
    productDiscount.style.color = "#ff5400";
    
    // Create compare price element
    const comparePrice = document.createElement('p');
    comparePrice.textContent = `${productData.compare_at_price}`;
    comparePrice.style.color = "grey";
    comparePrice.style.textDecoration = 'line-through';

    
    // Append elements to Div 2
    div2.appendChild(productPrice);
    div2.appendChild(comparePrice);
    div2.appendChild(productDiscount);
    // Create Div 3
    const div3 = document.createElement('div');
    div3.classList.add('button-container');

    // Create button element
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.classList.add('buy-button');

    // Append button to Div 3
    div3.appendChild(button);

    // Append Div 1, Div 2, and Div 3 to the product card
    productCard.appendChild(productImage);
    productCard.appendChild(div1);
    productCard.appendChild(div2);
    productCard.appendChild(div3);

    // Append product card to the parent container
    parentContainer.appendChild(productCard);
}

document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products');

    // Function to fetch data from the API
    async function fetchProducts() {
        try {
            const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
            return {};
        }
    }

    // Function to display products based on category [mens, womens, kids, .......]
    function displayProducts(categoryName, products) {
        productsContainer.innerHTML = ""

        // Find the category object based on the categoryName
        const category = products.categories.find(category => category.category_name === categoryName);

        // Iterate over each product in the category_products array
        category.category_products.forEach(productData => {
            // Pass the data to the addProductCard function to render on scree
            addProductCard(productsContainer, productData);
        });
    }


    // Event listener for category links
    document.querySelectorAll('.category').forEach(button => {
        button.addEventListener('click', async function(event) {

            // Get the category from the data-category attribute
            const category = this.getAttribute('data-category');

            // Highlight the clicked button
            document.querySelectorAll('.category').forEach(btn => {
                btn.classList.remove('active'); // Remove 'active' class from all buttons
            });
            this.classList.add('active'); // Add 'active' class to the clicked button

            // Fetch products and display based on the selected category
            const products = await fetchProducts();
            displayProducts(category, products);
        });
    });
    
    // Initially display products for the men category
    // Men is hard coded in the First API call to show the Men section :)
    const mensButton = document.querySelector('[data-category="Men"]');
    fetchProducts().then(products => {
        mensButton.classList.add('active');
        displayProducts('Men', products);
    });
});