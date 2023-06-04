"use strict";

window.addEventListener("load", start);

let products = [
    { name: "Boat", price: 30, inStock: true },
    { name: "Abs", price: 200, inStock: false },
    { name: "jacket", price: 150, inStock: true },
];

function start() {
    showProducts();
    document
        .querySelector("#select-sort-by")
        .addEventListener("change", sortBy);
}

function showProducts() {
    document.querySelector("#list-container").innerHTML = "";
    for (const product of products) {
        const html = /*html*/ `
        
        <p>${product.name} - ${product.price} - ${product.inStock}</p>
        
        `;
        document
            .querySelector("#list-container")
            .insertAdjacentHTML("beforeend", html);
    }
}

function sortBy(event) {
    const selected = event.target.value;
    console.log(selected);

    if (selected === "name") {
        products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selected === "price") {
        products.sort((a, b) => a.price - b.price);
    } else if (selected === "inStock") {
        products.sort((a, b) =>
            a.inStock.toString().localeCompare(b.inStock.toString())
        );
        products.reverse();
    }
    showProducts();
}
