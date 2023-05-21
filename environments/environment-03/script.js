"use strict";

window.addEventListener("load", start);

async function start() {
    const data = await getData();
    console.log(data);
}

async function getData() {
    const response = await fetch("users.json");
    console.log(response);
    const data = response.json();
    return data;
}
