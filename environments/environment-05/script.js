import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
    courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
    showCourses();
}

function showCourses() {
    for (const course of courses) {
        const html = /*html*/ `
        
        <li>${course.name} - ${course.ectsPoints} </li>
        
        `;
        document
            .querySelector("#courses-list")
            .insertAdjacentHTML("beforeend", html);
    }
}
