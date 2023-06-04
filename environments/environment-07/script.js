"use strict";

window.addEventListener("load", start);

let students = [];

function start() {
    console.log();
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
    console.log(students);

    checkMail(newStudent.email);
}

function checkMail(email) {
    const checkEmail = email.split("@");

    const navn = checkEmail[0];
    const domain = checkEmail[1];

    if (navn < 4 || domain !== "stud.kea.dk") {
        students.pop();
    }
}
