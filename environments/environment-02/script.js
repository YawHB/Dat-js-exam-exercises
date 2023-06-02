"use strict";
window.addEventListener("load", start);

const animals = [];

function start() {
    console.log("start");
    document
        .querySelector("#create-form")
        .addEventListener("submit", submitForm);
}

function submitForm(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.animalName.value;
    const type = form.animalType.value;
    const age = form.animalAge.value;

    createAnimal(name, type, age);
    animals.sort((a, b) => a.name.localeCompare(b.name));
    console.log(animals);
    showAnimals();
}

function createAnimal(name, type, age) {
    const newAnimal = {
        name,
        type,
        age,
    };

    animals.push(newAnimal);
}

function showAnimals() {
    document.querySelector("tbody").innerHTML = "";
    animals.forEach(showAnimal);
}

function showAnimal(animal) {
    const html = /*html*/ `
    <tr>
        <td>${animal.name} </td>
        <td> ${animal.type} </td>
        <td> ${animal.age}</td>
    </tr>
    
    `;
    document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}
