// "use strict";

// window.addEventListener("load", start);

// let students = [];

// function start() {
//     console.log();

//     document
//         .querySelector("#create-student-form")
//         .addEventListener("submit", submitForm);
// }

// function submitForm(event) {
//     event.preventDefault();

//     const form = event.target;

//     const name = form.name.value;
//     const email = form.email.value;
//     const age = Number(form.age.value);

//     const newStudent = addStudent(name, email, age);
//     console.log(newStudent);
//     students.push(newStudent);
//     sortby(students);
//     showStudents(sortedByAge);
// }

// function showStudents(students) {
//     document.querySelector("tbody").innerHTML = "";
//     for (const student of students) {
//         displayStudent(student);
//     }
// }

// function sortby(array) {
//     array.sort((a, b) => a.age - b.age);
// }

// function displayStudent(student) {
//     const html = /*html*/ `

//     <tr>

//     <td>${student.name}</td>
//     <td>${student.email}</td>
//     <td>${student.age}</td>

//     </tr>

//     `;

//     document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
// }

// function addStudent(name, email, age) {
//     return {
//         name,
//         email,
//         age,
//     };
// }

"use strict";

window.addEventListener("load", start);

const studentsArr = [];

function start() {
    document
        .querySelector("#create-student-form")
        .addEventListener("submit", submitForm);
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const age = Number(form.age.value);

    createStudent(name, email, age);
}

function createStudent(name, email, age) {
    const newStudent = {
        name,
        email,
        age,
    };

    studentsArr.push(newStudent);
    console.log(studentsArr);

    const filteredByAge = studentsArr.filter((student) => student.age >= 18);

    filteredByAge.sort((a, b) => a.name.localeCompare(b.name));

    showStudents(filteredByAge);
}

function showStudents(array) {
    document.querySelector("tbody").innerHTML = "";
    for (const student of array) {
        displayStudent(student);
    }
}

function displayStudent(student) {
    const html = /*html*/ `
    
    <tr>

<td>${student.name} - ${student.age}</td>


    </tr>

    `;

    document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}
