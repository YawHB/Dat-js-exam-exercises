"use strict";

window.addEventListener("load", start);

let students = [];

function start() {
    document
        .querySelector("#create-student-form")
        .addEventListener("submit", submitForm);
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const newStudent = {
        name: form.name.value,
        email: form.email.value,
        age: Number(form.age.value),
    };

    students.push(newStudent);
    students = students.filter((student) => student.age >= 18);
    students.sort((a, b) => a.name.localeCompare(b.name));
    showStudent();
}

function showStudent() {
    document.querySelector("tbody").innerHTML = "";
    for (const student of students) {
        const html = /*html*/ `
        
        <tr>
            <td>${student.name} - ${student.email} - ${student.age}</td>
        </tr>
        
        `;
        document
            .querySelector("#students-table-body")
            .insertAdjacentHTML("beforeend", html);
    }
}
