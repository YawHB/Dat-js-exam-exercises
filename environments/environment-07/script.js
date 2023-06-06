"use strict";

window.addEventListener("load", start);

function start() {
    document
        .querySelector("#create-student-form")
        .addEventListener("submit", submitForm);

    showStudents();
}

let students = [];

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const newStudent = {
        name: form.name.value,
        email: form.email.value,
        age: Number(form.age.value),
    };
    students.push(newStudent);
    showStudents();
}

function showStudents() {
    document.querySelector("#students-table-body").innerHTML = "";
    students = students.filter((student) => student.age >= 18);
    students.sort((a, b) => a.name.localeCompare(b.name));
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
