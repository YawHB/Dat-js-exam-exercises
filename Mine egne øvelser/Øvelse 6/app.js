// "use strict"

// window.addEventListener("load", start);

// const ministre = [];

// async function start() {
//     const data = await fetchData();
//     data.forEach(pushToArray);
//     console.log(ministre);
//     countRoles(ministre);

//     const namedSorted = sortName(ministre);
//     showPersons(namedSorted);
// }

// async function fetchData() {
//     const res = await fetch("./statsMinister.json");
//     const data = await res.json();
//     return data;
// }

// function pushToArray(person) {
//     ministre.push(person);
// }

// function showPersons(persons) {
//     for (const person of persons) {
//         displayPerson(person);
//     }
// }

// function displayPerson(person) {
//     const html = /*html*/ `

// <li>${person.name}</li>

//     `;
//     document
//         .querySelector("#statsministreList")
//         .insertAdjacentHTML("beforeend", html);
// }

// function sortName(names) {
//     return names.sort((a, b) => a.name.localeCompare(b.name));
// }

// let red = 0;
// let blue = 0;

// function countRoles(array) {
//     for (const person of array) {
//         if (person.isRed) {
//             red++;
//         } else {
//             blue++;
//         }
//     }
//     document.querySelector("#blueCount").textContent = blue;
//     document.querySelector("#redCount").textContent = red;
// }
