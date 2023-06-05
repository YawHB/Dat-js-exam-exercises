"use strict";

window.addEventListener("load", start);

let playlist = [];

async function start() {
    playlist = await fetchSongs();
    console.log(playlist);
    showSongs();
}

async function fetchSongs() {
    const res = await fetch("playlist.json");
    return res.json();
}

function showSongs() {
    document.querySelector("#songlist").innerHTML = "";
    for (const song of playlist) {
        const html = /*html*/ `
        
        <li> ${song.artist} - ${song.title} - (${song.duration}) <button>Remove</button>
        </li>

        `;
        document
            .querySelector("#songlist")
            .insertAdjacentHTML("beforeend", html);

        document
            .querySelector("#songlist li:last-child button")
            .addEventListener("click", () => removeSong(song));
    }
}

function removeSong(song) {
    const index = playlist.indexOf(song);

    playlist.splice(index, 1);
    showSongs();
}
