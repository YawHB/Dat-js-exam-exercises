"use strict";

// const poepleArr = [];

// window.addEventListener("load", start);

// async function start() {
//     const data = await fetchData();

//     document
//         .querySelector("#personForm")
//         .addEventListener("submit", submitForm);
// }

// async function fetchData() {
//     const res = await fetch("./people.json");
//     const data = await res.json();
//     data.forEach(pushToArr);
//     console.log(poepleArr);
// }

// function pushToArr(person) {
//     poepleArr.push(person);
// }

// function submitForm(event) {
//     event.preventDefault();

//     const form = event.target;

//     // const name = form.name.value;
//     // const age = form.age.value;
//     // const male = form.male.checked;
//     // const female = form.female.checked;

//     // const newPerson = addPerson(name, age, male, female);

//     const newPerson = {
//         name: form.name.value,
//         age: form.age.value,
//         male: form.male.checked,
//         female: form.female.checked,
//     };

//     poepleArr.push(newPerson);
//     const sortedAges = sortedBy(poepleArr);
//     showPersons(sortedAges);
// }

// function sortedBy(people) {
//     return people.sort((a, b) => a.age - b.age);
// }

// // function addPerson(name, age, male, female) {
// //     return {
// //         name,
// //         age,
// //         male,
// //         female,
// //     };
// // }

// function showPersons(persons) {
//     document.querySelector("ul").innerHTML = "";
//     for (const person of persons) display(person);
// }

// function display(person) {
//     const html = /*html*/ `
//     <li>${person.name} - ${person.age} </li>

//     `;

//     document.querySelector("ul").insertAdjacentHTML("beforeend", html);
// }

window.addEventListener("load", start);

const peopleArr = [];
function start() {
    document
        .querySelector("#personForm")
        .addEventListener("submit", submitForm);
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const age = form.age.value;
    const male = form.male.checked;
    const female = form.female.checked;

    const newPerson = addPerson(name, age, male, female);
    peopleArr.push(newPerson);
    console.log(peopleArr);

    const sortedBy = sortBy(peopleArr);
    showPeople(sortedBy);
}

function sortBy(people) {
    return people.sort((a, b) => a.age - b.age);
}

function showPeople(people) {
    document.querySelector("ul").innerHTML = "";
    for (const person of people) {
        display(person);
    }
}

function display(person) {
    const html = /*html*/ `
    
    <li>${person.name} ${person.age}</li>

    `;
    document.querySelector("ul").insertAdjacentHTML("beforeend", html);
}

function addPerson(name, age, gender) {
    return {
        name,
        age,
        gender,
    };
}
