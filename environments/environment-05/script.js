import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
    console.log(courses);
    showCourses(courses);
    document
        .querySelector("#select-filter-ects")
        .addEventListener("change", filterBy);
}

function showCourses(courses) {
    document.querySelector("#courses-list").innerHTML = "";
    for (const course of courses) {
        const html = /*html*/ `
        
        <li>${course.name} - ${course.ectsPoints} </li>
        `;
        document
            .querySelector("#courses-list")
            .insertAdjacentHTML("beforeend", html);
    }
}

function filterBy(event) {
    let selected = event.target.value;
    console.log(typeof selected);

    let filteredCourses = courses.filter(
        (course) => course.ectsPoints === Number(selected)
    );

    if (filteredCourses.length === 0) {
        document.querySelector("h2").textContent = "No courses available";
    }
    console.log(filteredCourses);
    showCourses(filteredCourses);
}
