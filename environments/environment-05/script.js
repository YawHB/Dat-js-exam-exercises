import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
    showCourses();

    addCourse("JS coding", 5, "Peter Lind");
    addCourse("UX ", 5, "Rasmus Cederdoorff");
}

function showCourses() {
    document.querySelector("#courses-list").innerHTML = "";
    for (const course of courses) {
        const html = /*html*/ `
        
        <li>${course.name} - ${course.ectsPoints} - ${course.teacher}</li>
        
        `;
        document
            .querySelector("#courses-list")
            .insertAdjacentHTML("beforeend", html);
    }
}

function addCourse(name, ectsPoints, teacher) {
    const newCourse = {
        name,
        ectsPoints,
        teacher,
    };

    courses.push(newCourse);
    showCourses();
}
