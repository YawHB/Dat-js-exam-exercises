"use strict";

window.addEventListener("load", start);

const products = [
    { name: "phone", price: 100, inStock: true },
    { name: "Book", price: 20, inStock: false },
    { name: "Bike", price: 50, inStock: true },
];

function start() {
    document
        .querySelector("#create-form")
        .addEventListener("submit", submitForm);
    showPorducts();
}

function showPorducts() {
    const productsInStock = products.filter((product) => product.inStock);
    document.querySelector("#list-container").innerHTML = "";

    for (const product of productsInStock) {
        const html = /*html*/ `
        
        <p>${product.name} $${product.price} </p>
        
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
    console.log(products);
    showPorducts();
}
