"use strict";
window.addEventListener("load", start);

let products = [
    { name: "hat", price: 20, inStock: true },
    { name: "shoes", price: 130, inStock: false },
    { name: "phone", price: 500, inStock: true },
];

function start() {
    document
        .querySelector("#form-container")
        .addEventListener("submit", submitForm);
    showProducts();
}

function showProducts() {
    products = products.filter((product) => product.inStock === true);
    document.querySelector("#list-container").innerHTML = "";
    for (const product of products) {
        const html = /*html*/ `
        
        <p>${product.name} $${product.price} ${product.inStock}</p>
        
        `;
        document
            .querySelector("#list-container")
            .insertAdjacentHTML("beforeend", html);
    }
}

function submitForm(event) {
    event.preventDefault();
    const form = event.target;

    const newProduct = {
        name: form.name.value,
        price: form.price.value,
        inStock: form.inStock.checked,
    };

    products.push(newProduct);
    showProducts();
}
