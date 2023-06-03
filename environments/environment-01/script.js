window.addEventListener("load", start);

let users = [];

async function start() {
    users = await fetchUsers();
    console.log(users);

    showUsers();
}

async function fetchUsers() {
    const res = await fetch("users.json");
    return await res.json();
}

function showUsers() {
    let admin = 0;
    let userx = 0;
    let guest = 0;
    for (const user of users) {
        if (user.role === "admin") {
            admin++;
        } else if (user.role === "user") {
            userx++;
        } else if (user.role === "guest") {
            guest++;
        }

        const html = /*html*/ `
        
        <li>${user.name} - ${user.role} - ${user.active}</li>
        
        `;
        document
            .querySelector("#userlist")
            .insertAdjacentHTML("beforeend", html);
    }

    document.querySelector("#admin-count").textContent = admin;
    document.querySelector("#user-count").textContent = userx;
    document.querySelector("#guest-count").textContent = guest;
}
