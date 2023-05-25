window.addEventListener("load", start);

let animalArr = [
    { name: "Jo", type: "cat", age: 2 },
    { name: "Bo", type: "Dog", age: 3 },
    { name: "Cho", type: "Fly", age: 1 },
];

function start() {
    document
        .querySelector("#create-form")
        .addEventListener("submit", userInput);
    // sortAnimals(animalArr);
}

function showAnimals(animals) {
    clearTableContent();
    for (const animal of animals) {
        showAnimal(animal);
    }
}

function showAnimal(animal) {
    const html = /*html*/ `
    
    <li>${animal.name} - ${animal.age}</li>
    
    `;
    document
        .querySelector("#list-container")
        .insertAdjacentHTML("beforeend", html);
}

function userInput(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.animalName.value;
    const type = form.animalType.value;
    const age = form.animalAge.value;

    // const newAnimal = { name, type, age };
    const newAnimal = createNewObj(name, type, age);
    animalArr.push(newAnimal);
    const sortedByAge = sortAnimals();
    console.log(sortedByAge);
    showAnimals(sortedByAge);
}

function sortAnimals() {
    return animalArr.sort((a, b) => a.age - b.age);
}

function clearTableContent() {
    console.log("clear ");
    const table = document.querySelector("#list-container table tbody");
    table.innerHTML = "";
}

function createNewObj(name, type, age) {
    return {
        name,
        type,
        age,
    };
}
