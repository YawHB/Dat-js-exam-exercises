"use strict";

window.addEventListener("load", start);

const animals = [
    { name: "Joe", type: "dog", age: 4 },
    { name: "brownie", type: "snake", age: 2 },
    { name: "Jesus", type: "mouse", age: 40 },
];

function start() {
    showAnimals();

    document
        .querySelector("#create-form")
        .addEventListener("submit", submitForm);
}

function showAnimals() {
    document.querySelector("tbody").innerHTML = "";
    animals.sort((a, b) => a.age - b.age);
    for (const animal of animals) {
        const html = /*html*/ `
        
        <tr>

        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>

        </tr>
        
        `;
        document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
    }
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const newAnimal = {
        name: form.animalName.value,
        type: form.animalType.value,
        age: form.animalAge.value,
    };

    animals.push(newAnimal);
    showAnimals();
}
