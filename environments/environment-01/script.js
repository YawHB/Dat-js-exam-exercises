"use strict";

window.addEventListener("load", start);

// const users = []

async function start() {
    let users = await fetchUsers();
    console.log(users);
    users = users.filter((user) => user.role === "admin");
    showUsers(users);
}

async function fetchUsers() {
    const res = await fetch("users.json");
    return await res.json();
}

function showUsers(users) {
    for (const user of users) {
        const html = /*html*/ `
        
        <li>${user.name} - ${user.active ? "active" : "not active"} ${
            user.role
        } </li>
        
        `;

        document
            .querySelector("#userlist")
            .insertAdjacentHTML("beforeend", html);
    }
}
