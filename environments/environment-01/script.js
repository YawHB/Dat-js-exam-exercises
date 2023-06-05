"use strict";

window.addEventListener("load", start);

let users = [];

async function start() {
    users = await getUsers();
    console.log(users);

    // users = users.filter((user) => user.active);
    showUsers();

    addUser("Peter Lind", true, "King");
}

async function getUsers() {
    const res = await fetch("users.json");
    return await res.json();
}

function showUsers() {
    document.querySelector("#userlist").innerHTML = "";

    for (const user of users) {
        if (!user.active) continue;

        const html = /*html*/ `
        
        <li>${user.name} - ${user.active} - ${user.role}</li>
        `;
        document
            .querySelector("#userlist")
            .insertAdjacentHTML("beforeend", html);
    }
}

function addUser(name, active, role) {
    const newUser = {
        name,
        active,
        role,
    };

    users.push(newUser);
    showUsers();
}
