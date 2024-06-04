function make_a_album(artist, title, tracks) {
    var album = { artistname: artist, title_1: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_a_album("Owais", "track1"));
console.log(make_a_album("Khizer", "track2"));
console.log(make_a_album("Ateeb", "track3", 15));
