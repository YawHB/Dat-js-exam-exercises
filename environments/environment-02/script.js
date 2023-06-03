"use strict";

window.addEventListener("load", start);

let animals = [];

function start() {
    console.log();
    document
        .querySelector("#create-form")
        .addEventListener("submit", submitForm);
    showAnimals();
}

function createAnimal(name, type, age) {
    const newAnimal = { name, type, age };

    animals.push(newAnimal);
    console.log(animals);
    showAnimals();
}

function submitForm(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.animalName.value;
    const type = form.animalType.value;
    const age = form.animalAge.value;

    createAnimal(name, type, age);
}

function showAnimals() {
    animals.sort((a, b) => a.name.localeCompare(b.name));
    document.querySelector("tbody").innerHTML = "";
    for (const animal of animals) {
        const html = /*html*/ `
        
        <tr>

        <td>${animal.name} </td>
        <td>${animal.type} </td>
        <td>${animal.age} </td>


        </tr>
        
        `;
        document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
    }
}
