"use strict";

//***************** 1. forsøg *************************/

// window.addEventListener("load", start);

// let sportsArr = [
//     { name: "soccer", equipt: "ball, goal", isSummerSeason: true },
//     { name: "handball", equipt: "ball ,goal", isSummerSeason: false },
//     { name: "baseball", equipt: "gym, bat", isSummerSeason: true },
// ];

// function start() {
//     document.querySelector("#sportForm").addEventListener("submit", submitForm);
// }

// function showSports(sports) {
//     console.log(sports);
//     for (const sport of sports) {
//         showSport(sport);
//     }
// }

// function submitForm(event) {
//     event.preventDefault();
//     const form = event.target;

//     const name = form.name.value;
//     const equipment = form.equipment.value;
//     const isSummerSeason = form.isSummerSeason.checked;

//     const newSport = createNewSport(name, equipment, isSummerSeason);
//     sportsArr.push(newSport);
//     const sortedNames = sortBy(sportsArr);
//     showSports(sortedNames);
// }

// function createNewSport(name, equipment, isSummerSeason) {
//     return { name, equipment, isSummerSeason };
// }

// function showSport(sport) {
//     const html = /*html*/ `
// <li>${sport.name}</li>

// `;

//     document.querySelector("ul").insertAdjacentHTML("beforeend", html);
// }

// function sortBy(array) {
//     const sorted = array.sort((a, b) => a.name.localeCompare(b.name));
//     return sorted;
// }

//***************** 2. forsøg *************************/

// window.addEventListener("load", start);

// let sportArr = [
//     { name: "soccer", equipt: "grass, ball", inSummerSeason: true },
//     { name: "handball", equipt: "wood, ball", inSummerSeason: false },
//     { name: "baseball", equipt: "bat, ball", inSummerSeason: true },
// ];

// function start() {
//     document.querySelector("#sportForm").addEventListener("submit", submitForm);
// }

// function submitForm(event) {
//     event.preventDefault();

//     const form = event.target;

//     const newSport = {
//         name: form.name.value,
//         equipment: form.equipment.value,
//         inSummerSeason: form.isSummerSeason.value,
//     };

//     sportArr.push(newSport);
//     const sortedArr = sortByName(sportArr);
//     console.log(sortedArr);
//     displaySports(sortedArr);
// }

// function sortByName(sportArr) {
//     return sportArr.sort((a, b) => a.name.localeCompare(b.name));
// }

// function displaySports(sports) {
//     document.querySelector("ul").innerHTML = "";
//     for (const sport of sports) {
//         showSport(sport);
//     }
// }

// function showSport(sport) {
//     console.log(sport);
//     const html = /*html*/ `

//     <li>${sport.name}</li>

//     `;
//     document.querySelector("ul").insertAdjacentHTML("beforeend", html);
// }
