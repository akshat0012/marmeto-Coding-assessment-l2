# Product Display Web App

This project fetches product data from an API and displays it in the browser using JavaScript.

## Live Demo

Check out the live demo of this project [here](https://akshat0012.github.io/marmeto-Coding-assessment-l2/).

## Overview

This web application retrieves product information from an external API and dynamically populates the webpage with the fetched data. It allows users to view various categories of products and see details such as name, price, and images.

## Features

- **Category Selection**: Users can select different product categories (e.g., Men, Women, Kids) to view specific types of products.
  
- **Dynamic Rendering**: The application dynamically renders product cards based on the selected category, fetching data from the API and updating the webpage .
  
- **Product Card Display**: Each product is displayed in a card format, showing its name, price, and an image and discounts 🥳 .

## Functions

- **fetchProducts**: This function retrieves product data from the API asynchronously using the `fetch` API. It handles any errors that occur during the fetching process.
  
- **displayProducts**: This function takes a category and the fetched product data as input. It dynamically generates HTML elements to display the products of the selected category on the webpage.
  
- **addProductCard**: This function creates a product card element and appends it to the products container in the DOM. It receives product data as input and constructs the card with details such as name, price, and image.

## Getting Started

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Select a product category to view the corresponding products.

## Technologies Used

- HTML
- CSS
- JavaScript

## API Used

- [Product API](https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json) - An external API providing product data in JSON format.

## Credits

This project was developed by Akshat Chaudhary. Feel free to contribute or provide feedback 😇 !# marmeto-Coding-assessment-l2
