"use strict";
"use strict";

window.addEventListener("load", start);

let playlist = [];

async function start() {
    console.log((playlist = await fetchSongs()));

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
        
        <li>${song.artist} - ${song.title} - ${song.duration} </li>
        <button>Remove</button>
        `;
        document
            .querySelector("#songlist")
            .insertAdjacentHTML("beforeend", html);

        //last button added in #songlist gets an event handler ("click")
        document
            .querySelector("#songlist button:last-child")
            .addEventListener("click", () => removeSong(song));
    }
}

function removeSong(song) {
    const index = playlist.indexOf(song);
    console.log(index);
    playlist.splice(index, 1);
    showSongs();
}
