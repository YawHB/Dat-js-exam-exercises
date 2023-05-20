"use strict";

window.addEventListener("load", start);

//Del 1
async function start() {
  const userVariable = await getData();

  userVariable.forEach(showUsers);
}

async function getData() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

//Del 2

function showUsers(user) {
  const html = /*html*/ `
  
  <li>${user.name}</li>
  `;
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}
