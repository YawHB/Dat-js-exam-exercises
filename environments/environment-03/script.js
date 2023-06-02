"use strict";

window.addEventListener("load", start);

const products = [
    { name: "shoes", price: 200, inStock: true },
    { name: "boat", price: 4000, inStock: false },
    { name: "hat", price: 50, inStock: true },
];

function start() {
    console.log();
    showProducts(products);

    document
        .querySelector("#select-sort-by")
        .addEventListener("change", sortBy);
}

function showProducts(products) {
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

function sortBy(event) {
    const userPick = event.target.value;
    console.log(userPick);
    let sortedArr = [];

    if (userPick === "name") {
        sortedArr = products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (userPick === "price") {
        sortedArr = products.sort((a, b) => a.price - b.price);
    } else if (userPick === "inStock") {
        sortedArr = products.sort((a, b) =>
            a.inStock.toString().localeCompare(b.inStock.toString())
        );
        sortedArr.reverse();
    }

    console.log(sortedArr);
    showProducts(sortedArr);
}
