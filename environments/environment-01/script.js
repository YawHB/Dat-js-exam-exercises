"use strict";
window.addEventListener("load", start);

//Del 1
async function start() {
  const userArray = await getData();
  // userArray.forEach(showUsers);
  // showUsers2(userArray);
}

async function getData() {
  const response = await fetch("users.json"); //This is how to fetch from another file on the same level
  console.log(response);
  const data = await response.json(); //reads the response and returns a JavaScript object.
  return data;
}

/* ========================================= ForEach metode ================================================================================== */
//Del 2.A + 3.A
function showUsers(user) {
  if (user.role === "admin") {
    const html = /*html*/ `
 <li> ${user.name} - ${user.active}</li>
 <li>${user.role}</li>
 `;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

/* ========================================= For of metode ================================================================================== */

//Del 2.B + 3.B

function showUsers2(array) {
  for (const user of array) {
    showUser2(user);
  }
}

function showUser2(user) {
  if (user.role === "admin") {
    const html = /*html*/ `
 <li> ${user.name} - ${user.active}</li>
 <li>${user.role}</li>
 <li>"Hej"</li>

 `;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}
