// "use strict";

// window.addEventListener("load", start);

// let userArr = [];

// function start() {
//     getData();

//     const newObj = addNewObj("Hans", true, "admin");
//     userArr.push(newObj);
// }

// async function getData() {
//     const res = await fetch("./users.json");
//     const data = await res.json();

//     userArr = pushUsersToArray(data);
//     showUsers(userArr);
//     console.log(userArr);
// }

// function pushUsersToArray(users) {
//     for (const user of users) {
//         userArr.push(user);
//     }
//     return userArr;
// }

// function showUsers(users) {
//     //* Display active users using for of loop
//     for (const user of users) {
//         if (user.active) {
//             showUser(user);
//         }
//     }

//     //*Display active users using filter
//     // const activeUsers = users.filter((user) => user.active);
//     // showUser(activeUsers);
// }

// function showUser(user) {
//     const html = /*html*/ `
//     <li>${user.name} - is active</li>

//     `;
//     document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
// }

// function addNewObj(name, active, role) {
//     return {
//         name,
//         active,
//         role,
//     };
// }
