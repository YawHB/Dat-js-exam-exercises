"use strict";

window.addEventListener("load", start);

const products = [
    { name: "hat", price: 30, inStock: true },
    { name: "shoes", price: 30, inStock: false },
    { name: "hat", price: 30, inStock: true },
];

function start() {
    showProducts();
    document
        .querySelector("#form-container")
        .addEventListener("submit", submitForm);
}

function showProducts() {
    document.querySelector("#list-container").innerHTML = "";
    products.sort((a, b) =>
        a.inStock.toString().localeCompare(b.inStock.toString())
    );
    products.reverse();
    products.forEach(displayProduct);
}

function displayProduct(product) {
    const html = /*html*/ `
    
    <p>${product.name} - ${product.inStock ? "In stock" : "Out of stock"}</p>
    
    `;
    document
        .querySelector("#list-container")
        .insertAdjacentHTML("beforeend", html);
}

function submitForm(event) {
    event.preventDefault();
    const form = event.target;

    const newProduct = {
        name: form.name.value,
        price: Number(form.price.value),
        inStock: form.inStock.checked,
    };

    products.push(newProduct);
    showProducts();
}
