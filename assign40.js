"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artistname, albumtitle, tracks) {
    let info = {
        artistname,
        albumtitle,
        tracks
    };
    return info;
}
console.log(make_album("Artist 1", "Song"));
console.log(make_album("Artist 2", "pop"));
console.log(make_album("Artist 3", "Rock", 6));
