import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
    sortName();
    // sortEmail();
    showTeachers();
}

function sortName() {
    teachers.sort((a, b) => a.name.localeCompare(b.name));
}

function sortEmail() {
    teachers.sort((a, b) => a.email.localeCompare(b.email));
}

function showTeachers() {
    for (const teacher of teachers) {
        const html = /*html*/ `
        

        
        <li>${teacher.name} - ${teacher.email}</li>
        
        `;

        document
            .querySelector("#teachers-list")
            .insertAdjacentHTML("beforeend", html);
    }
}
