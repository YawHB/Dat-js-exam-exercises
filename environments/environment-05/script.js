import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
    courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
    courses.reverse();
    showCourses();
}

function showCourses() {
    for (const course of courses) {
        const html = /*html*/ `
        
        <li>${course.name} - ${course.ectsPoints} - ${course.teacher}</li>
        `;
        document
            .querySelector("#courses-list")
            .insertAdjacentHTML("beforeend", html);
    }
}
