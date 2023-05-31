"use strict";

window.addEventListener("load", start);

const products = [
    { name: "house", price: 300, instock: true },
    { name: "boat", price: 5000, instock: false },
    { name: "shoes", price: 100, instock: true },
];

function start() {
    console.log("star");
    showProducts();
    document
        .querySelector("#select-sort-by")
        .addEventListener("change", showSortedBy);
}

function showSortedBy(event) {
    const selected = event.target.value;

    if (selected === "name") {
        products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selected === "price") {
        products.sort((a, b) => a.price - b.price);
    } else if (selected === "inStock") {
        products.sort((a, b) =>
            a.instock.toString().localeCompare(b.name.toString())
        );
        products.reverse();
    }

    showProducts();
}

function showProducts() {
    document.querySelector("#list-container").innerHTML = "";
    for (const product of products) {
        const html = /*html*/ `
        
        <p>${product.name}, ${product.price}, ${product.instock}</p>
        
        `;
        document
            .querySelector("#list-container")
            .insertAdjacentHTML("beforeend", html);
    }
}
