var Magician_Names = ["Pablo", "Eric", "Jessica"];
function show_magicians(Magicians) { Magicians.forEach(function (name) { return console.log(name); }); }
function make_a_great(Magicians) {
    return Magicians.map(function (name) { return "The Great ".concat(name); });
}
var copy_Magician_Names = Magician_Names.slice();
var copy_great_magicians = make_a_great(copy_Magician_Names);
console.log("\nOriginal Array");
show_magicians(Magician_Names);
console.log("\n Modified Array");
show_magicians(copy_great_magicians);
