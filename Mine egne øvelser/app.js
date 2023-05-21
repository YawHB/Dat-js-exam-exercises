"use strict";

window.addEventListener("load", start);
const bookArr = []; // Global book array to save all books

function start() {
    document
        .querySelector("#create-form")
        .addEventListener("submit", submitBook);
}

//creates an object of the stored values and returns it
function createNewBookObj(title, forfatter, år) {
    return {
        title,
        forfatter,
        år,
    };
}

//Stores the user input in variables.
function submitBook(event) {
    event.preventDefault();

    const form = event.target;

    const title = form.bookTitle.value;
    const forfatter = form.bookAuthor.value;
    const år = form.bookYear.value;

    //stores the book object in newBookObj
    const newBookObj = createNewBookObj(title, forfatter, år);

    //Stores the object in the book array
    bookArr.push(newBookObj);
    rydOversigt();
    showBooks();
}

//Clears the table
function rydOversigt() {
    const oversigt = document.querySelector("#book-list");
    oversigt.innerHTML = "";
}

//Iterates through each book
function showBooks() {
    bookArr.forEach(showBook);
}

// displays each book
function showBook(bog) {
    const html = /*html*/ `
    <li>${bog.title}, ${bog.forfatter}, ${bog.år}</li>
    `;
    document.querySelector("#book-list").insertAdjacentHTML("beforeend", html);
}
