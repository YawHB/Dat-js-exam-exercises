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
    event.prevendDefault();
    const form = event.target;

    const name = form.name.value;
    const type = form.type.value;
    const age = form.age.value;

    createAnimal(name, type, age);
}

function createAnimal(name, type, age) {
    const newAnimal = {
        name,
        type,
        age,
    };

    animals.push(newAnimal);
}
