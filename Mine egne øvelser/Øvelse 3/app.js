// window.addEventListener("load", start);

// let teachers = [];

// async function start() {
//     const data = await getData();
//     data.forEach(pushDataInArray);
//     showTeachers(teachers);
//     countRoles(data);
// }

// async function getData() {
//     const res = await fetch("./teachers.json");
//     const data = await res.json();

//     return data;
// }

// function pushDataInArray(teacher) {
//     teachers.push(teacher);
// }

// function showTeachers(teachers) {
//     for (const teacher of teachers) {
//         showTeacher(teacher);
//     }
// }

// function showTeacher(teacher) {
//     const html = /*html*/ `
//     <li>${teacher.name}</li>

//     `;
//     document
//         .querySelector("#teacher-list")
//         .insertAdjacentHTML("beforeend", html);
// }

// let lecture = 0;
// let seniorLecture = 0;

// function countRoles(teachers) {
//     for (const teacher of teachers) {
//         if (teacher.title === "Lecturer") {
//             lecture++;
//         } else {
//             seniorLecture++;
//         }
//     }
//     document.querySelector("#lecture-count").textContent = lecture;
//     document.querySelector("#senior-lecture-count").textContent = seniorLecture;
// }

window.addEventListener("load", start);

let teacherArr = [];

async function start() {
    const data = await getData();
    data.forEach(pushToArr);
    showTeachers(teacherArr);
    countRoles(teacherArr);
}

async function getData() {
    const res = await fetch("./teachers.json");
    return await res.json();
}

function pushToArr(teacher) {
    teacherArr.push(teacher);
}

function showTeachers(teacherArr) {
    for (const teacher of teacherArr) {
        showTeacher(teacher);
    }
}

function showTeacher(teacher) {
    const html = /*html*/ `
    
    <li>${teacher.name}</li>
    
    `;

    document
        .querySelector("#teacher-list")
        .insertAdjacentHTML("beforeend", html);
}

let lecturer = 0;
let seniorLecturer = 0;
function countRoles(teacherArr) {
    for (const teacher of teacherArr) {
        if (teacher.title === "Lecturer") {
            lecturer++;
        } else {
            seniorLecturer++;
        }
    }

    document.querySelector("#lecture-count").textContent = lecturer;
    document.querySelector("#senior-lecture-count").textContent =
        seniorLecturer;
}
