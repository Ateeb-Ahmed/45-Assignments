var Magician_names = ["Pablo", "Eric", "Jessica"];
function show_magicians(Magicians) { Magicians.forEach(function (name) { return console.log(name); }); }
function make_a_great(Magicians) {
    return Magicians.map(function (name) { return "The Great ".concat(name); });
}
var Great_Magicians = make_a_great(Magician_names);
show_magicians(Great_Magicians);
