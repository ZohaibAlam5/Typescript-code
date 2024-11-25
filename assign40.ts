
function make_album(artistname : string , albumtitle: string , tracks?: number){

    let info = {
        artistname, 
        albumtitle,
        tracks 
        }
return info

}

console.log(make_album("Artist 1", "Song"))
console.log(make_album("Artist 2", "pop"))
console.log(make_album("Artist 3", "Rock", 6))

