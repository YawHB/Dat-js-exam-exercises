"use strict";

window.addEventListener("load", start);

const students = [];

function start() {
    document
        .querySelector("#create-student-form")
        .addEventListener("submit", submitForm);
    showStudents();
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
    students.sort((a, b) => a.age - b.age);
    showStudents();
}

function showStudents() {
    document.querySelector("#students-table-body").innerHTML = "";
    for (const student of students) {
        const html = /*html*/ `
        
        <tr>

        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
        </tr>
        
        `;
        document
            .querySelector("#students-table-body")
            .insertAdjacentHTML("beforeend", html);
    }
}
