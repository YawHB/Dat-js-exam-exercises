window.addEventListener("load", start);

async function start() {
    console.log();
    const data = await getData();
    console.log(data);

    //Loops each user
    data.forEach(showUsers);
    filterAdmin(data);
}

async function getData() {
    const response = await fetch("users.json"); //Fetching data from another file on the same level
    const data = response.json(); //.json() to convert from json to js
    return data;
}

//displays each user in browser
function showUsers(user) {
    const html = /*html*/ `
    
    <!-- Uses ternary operator to display if user is active -->
    <li>${user.name} ${user.active ? "is active" : "is not active"}</li>
    

    `;
    document.querySelector("#user-list").insertAdjacentHTML("beforeend", html);
}

//Uses arrow function to filter for admin users.
function filterAdmin(data) {
    const adminUsers = data.filter((user) => user.role === "admin");
    console.log(adminUsers);
    //sort through the array of admin users to list them Z-A
    const sortingAdmins = adminUsers.sort((a, b) =>
        b.name.localeCompare(a.name)
    );
    console.log(sortingAdmins);
}

// function filterNow(user) {
//     return user.role === "admin";
// }
