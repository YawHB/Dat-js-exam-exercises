"use strict";

window.addEventListener("load", start);

const students = [];
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
        age: form.age.value,
    };

    students.push(newStudent);
    // console.table(students);

    checkMail(newStudent.email);
}

function checkMail(email) {
    const checkCorrectMail = email.split("@");
    const name = checkCorrectMail[0];
    const domain = checkCorrectMail[1];

    if (name.length < 4 || domain !== "stud.kea.dk") {
        students.pop();
    }
    console.table(students);
}
