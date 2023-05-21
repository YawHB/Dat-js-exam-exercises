"use strict";

window.addEventListener("load", start);

//Del 1
function start() {
    document
        .querySelector("#create-form")
        .addEventListener("submit", newAnimal);
}

function newAnimal(event) {
    const animalArr = [];
    console.log(animalArr);
    event.preventDefault();
    const form = event.target;

    //Del 2
    const newAnimalObj = {
        name: form.animalName.value,
        animalType: form.animalType.value,
        age: form.animalAge.value,
    };

    animalArr.push(newAnimalObj);
    return newAnimalObj;
}

//Del 3
