"use strict";

window.addEventListener("load", init);

//************************* EXAMPLE 1 for of loop ***************************************

function init() {
    example1();
    // example2();
}
async function example1() {
    const data = await getData();
    // console.log(data);
    showUsers(data); //
}

async function getData() {
    const response = await fetch("users.json"); //fethcing json data from another file
    const data = await response.json(); // Converts to js
    return data;
}

//Loops through each user
function showUsers(users) {
    for (const user of users) {
        showUser(user);
    }
}

//Global variables outside scope in order to count
let admin = 0;
let use = 0;
let guest = 0;
function showUser(user) {
    const html = /*html*/ `

    <li>${user.name}</li>
    `;

    //counts and displays the diffetent roles
    if (user.role === "admin") {
        admin++;
        document.querySelector("#admin-count").textContent = admin;
    } else if (user.role === "user") {
        use++;
        document.querySelector("#user-count").textContent = use;
    } else if (user.role === "guest") {
        guest++;
        document.querySelector("#guest-count").textContent = guest;
    }

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    console.log("example 1");
}

//************************* EXAMPLE 2 forEach loop ***************************************

// async function example2() {
//     const data = await getData();
//     console.log(data);
//     data.forEach(showUsers);
// }

// async function getData() {
//     const response = await fetch("users.json");
//     const data = await response.json();

//     return data;
// }

// let admin2 = 0;
// let use2 = 0;
// let guest2 = 0;
// function showUsers(user) {
//     const html = /*html*/ `

//     <li>${user.name}</li>
//     `;
//     if (user.role === "admin") {
//         admin2++;
//         document.querySelector("#admin-count").textContent = admin2;
//     } else if (user.role === "user") {
//         use2++;
//         document.querySelector("#user-count").textContent = use2;
//     } else if (user.role === "guest") {
//         guest2++;
//         document.querySelector("#guest-count").textContent = guest2;
//     }

//     document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
// }
