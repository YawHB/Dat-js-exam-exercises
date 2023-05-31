import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
    showTeachers();
    addTeacher("Jon", "email@mail.com");
}

function showTeachers() {
    document.querySelector("#teachers-list").innerHTML = "";
    for (const teacher of teachers) {
        const html = /*html*/ `
        
        <li>${teacher.name} - ${teacher.email}</li>
        
        `;

        document
            .querySelector("#teachers-list")
            .insertAdjacentHTML("beforeend", html);
    }
}

function addTeacher(name, email) {
    const newTeacher = { name, email };
    teachers.push(newTeacher);
    showTeachers();
}
