"use strict";
window.addEventListener("load", start);

let playlist = [
    { artist: "bubber1", title: "a", duration: "1:10" },
    { artist: "bubber2", title: "b", duration: "2:20" },
    { artist: "bubber3", title: "c", duration: "3:30" },
];

function start() {
    showPlaylist();
}

function showPlaylist() {
    document.querySelector("#songlist").innerHTML = "";
    for (const song of playlist) {
        const html = /*html*/ `
        
        <li>${song.artist} - ${song.title} - ${song.duration} <button>Upvote</button></li>
        
        `;
        document
            .querySelector("#songlist")
            .insertAdjacentHTML("beforeend", html);

        document
            .querySelector("#songlist li:last-child button")
            .addEventListener("click", () => voteUp(song));
    }
}

function voteUp(song) {
    console.log(song);

    const index = playlist.indexOf(song);

    if (index !== 0) {
        // const temp = playlist[index];
        // playlist[index] = playlist[index - 1];
        // playlist[index - 1] = temp;

        // const temp = playlist.splice(index, 1);
        // playlist.splice(index - 1, 0, temp[0]);

        [playlist[index - 1], playlist[index]] = [
            playlist[index],
            playlist[index - 1],
        ];
        showPlaylist();
    }
}
