"use strict";

window.addEventListener("load", start);

let playlist = [];

function start() {
    document
        .querySelector("#add-song-form")
        .addEventListener("submit", submitForm);

    document
        .querySelector("#sort-songs-form")
        .addEventListener("change", sortBy);
}

function submitForm(event) {
    event.preventDefault();
    const form = event.target;

    const newSong = {
        artist: form.name.value,
        title: form.title.value,
        duration: form.duration.value,
    };
    playlist.push(newSong);
    showSongs();
}

function showSongs() {
    document.querySelector("#songlist").innerHTML = "";
    for (const song of playlist) {
        const html = /*html*/ `
        <li>${song.artist} - ${song.title} - ${song.duration}</li>
        
        `;
        document
            .querySelector("#songlist")
            .insertAdjacentHTML("beforeend", html);
    }
}

function sortBy(event) {
    const selected = event.target.value;
    console.log(selected);

    playlist.sort((a, b) => a[selected].localeCompare(b[selected]));
    showSongs();
}
