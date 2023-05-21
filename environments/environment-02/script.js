"use strict";

window.addEventListener("load", start);

function start() {
    document
        .querySelector("#create-form")
        .addEventListener("submit", userInputForm);
}

//Del 1

function newAnimalObj(name, type, age) {
    return {
        name,
        type,
        age,
    };
}

//Del 2

function userInputForm(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.animalName.value;
    const type = form.animalType.value;
    const age = form.animalAge.value;

    const animalCreated = newAnimalObj(name, type, age);
    allAnimals.push(animalCreated);
    clearTableContent();
    sortAnimals();
}

let allAnimals = [];

//Del 3

function clearTableContent() {
    const tableBody = document.querySelector("#list-container table tbody");
    tableBody.innerHTML = "";
}

function sortAnimals() {
    const sortedByNAme = allAnimals.sort(sortByFirstName);
    console.log(sortedByNAme);
    sortedByNAme.forEach(displayAnimals);
}

function sortByFirstName(animal1, animal2) {
    return animal1.name.localeCompare(animal2.name);
}

function displayAnimals(animal) {
    const html = /*html*/ `

    <td id="names-in-table">${animal.name}</td>
    <td id="type-in-table"  >${animal.type}</td>
    <td id="age-in-table" >${animal.age}</td>
    `;

    document
        .querySelector("#list-container table tbody")
        .insertAdjacentHTML("beforeend", html);
}
