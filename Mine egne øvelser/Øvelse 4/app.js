//***************************  Forsøg 1 ***************************

// window.addEventListener("load", start);

// let booksArr = [];

// function start() {
//     document
//         .querySelector("#create-form")
//         .addEventListener("submit", clickSubmit);
// }

// function CreateBook(title, published, genre) {
//     const newBook = {
//         title,
//         published,
//         genre,
//     };

//     booksArr.push(newBook);
// }

// function clickSubmit(event) {
//     event.preventDefault();
//     const form = event.target;

//     const title = form.title.value;
//     const published = form.published.value;
//     const genre = form.genre.value;

//     CreateBook(title, published, genre);

//     const sortedByTitle = sortBy(booksArr);
//     sortedByTitle.forEach(showBooks);
//     console.log(sortedByTitle);
// }

// function showBooks(book) {
//     console.log("showMooks");
//     const html = /*html*/ `
//     <tr>

//         <td>${book.title}</td>
//         <td>${book.genre}</td>
//         <td>${book.published}</td>

//     </tr>
//     `;
//     document
//         .querySelector("#book-container table tbody")
//         .insertAdjacentHTML("beforeend", html);
// }

// function sortBy(booksArr) {
//     const books = booksArr.sort((book1, book2) =>
//         book1.title.localeCompare(book2.title)
//     );
//     return books;
// }

//***************************  Forsøg 2 ***************************
// window.addEventListener("load", start);

// let bookArr = [];

// function start() {
//     document
//         .querySelector("#create-form")
//         .addEventListener("submit", submitForm);
// }

// function CreateBook(title, published, genre) {
//     const newBook = { title, published, genre };

//     bookArr.push(newBook);
//     console.log(bookArr);
//     const sortedTitle = sortByTitle(bookArr);
//     showBooks(sortedTitle);
// }

// function submitForm(event) {
//     event.preventDefault();

//     const form = event.target;

//     const title = form.title.value;
//     const published = form.published.value;
//     const genre = form.genre.value;

//     document.querySelector("tbody").innerHTML = "";
//     CreateBook(title, published, genre);
// }

// function sortByTitle(array) {
//     return array.sort((a, b) => a.title.localeCompare(b.title));
// }

// function showBooks(books) {
//     for (const book of books) {
//         showBook(book);
//     }
// }

// function showBook(book) {
//     const html = /*html*/ `

//         <td>${book.title}</td>
//         <td>${book.published}</td>
//         <td>${book.genre}</td>

//     `;

//     document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
// }

//***************************  Forsøg 3 ***************************

window.addEventListener("load", start);

let bookArr = [];

function start() {
    document
        .querySelector("#create-form")
        .addEventListener("submit", submitForm);
}

function addBook(title, published, genre) {
    const newBook = { title, published, genre };

    bookArr.push(newBook);
    const sortedList = sortByTitle(bookArr);
    showBooks(sortedList);
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const published = form.published.value;
    const genre = form.genre.value;

    addBook(title, published, genre);
}

function sortByTitle(bookArr) {
    return bookArr.sort((a, b) => a.title.localeCompare(b.title));
}

function showBooks(books) {
    document.querySelector("tbody").innerHTML = "";
    for (const book of books) {
        showBook(book);
    }
}

function showBook(book) {
    const html = /*html*/ `
    
    <td>${book.title}</td>
    
    `;
    document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}
