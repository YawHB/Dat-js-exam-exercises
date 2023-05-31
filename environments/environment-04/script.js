import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
    sortName("name");
    // sortEmail();
}

function sortName(sortBy) {
    teachers.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    showTeachers();
}

function sortEmail() {
    teachers.sort((a, b) => a.email.localeCompare(b.email));
    showTeachers();
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
