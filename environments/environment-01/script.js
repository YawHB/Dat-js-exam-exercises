"use strict";

window.addEventListener("load", start);

let users = [];
async function start() {
    users = await fetchUsers();

    users = users.filter((user) => user.role === "admin");
    showUsers();
}

async function fetchUsers() {
    const res = await fetch("users.json");
    return await res.json();
}

function showUsers() {
    for (const user of users) {
        const html = /*html*/ `
        
        <li>${user.name} - ${user.active ? "Active" : "Not active"}</li>
        
        `;
        document
            .querySelector("#userlist")
            .insertAdjacentHTML("beforeend", html);
    }
}
