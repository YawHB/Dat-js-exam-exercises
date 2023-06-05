"use strict";

window.addEventListener("load", start);

let playlist = [
    { artist: "Bubber1", title: "a", duration: "1:10" },
    { artist: "Bubber2", title: "b", duration: "2:20" },
    { artist: "Bubber3", title: "c", duration: "3:30" },
];

function start() {
    showSongs();
}

function showSongs() {
    document.querySelector("#songlist").innerHTML = "";
    for (const song of playlist) {
        const html = /*html*/ `
        
        <li>${song.artist} - ${song.title} - ${song.duration} <button>Upvote</button> </li>
        
        `;
        document
            .querySelector("#songlist")
            .insertAdjacentHTML("beforeend", html);

        document
            .querySelector("#songlist li:last-child button")
            .addEventListener("click", () => upvoteSong(song));
    }
}

function upvoteSong(song) {
    const index = playlist.indexOf(song);
    console.log(index);

    if (index > 0) {
        const temp = playlist[index];
        playlist[index] = playlist[index - 1];
        playlist[index - 1] = temp;
    }

    showSongs();
}
