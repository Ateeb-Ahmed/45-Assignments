let Magician_Names= ["Pablo", "Eric", "Jessica"]

function show_magicians (Magicians: string[]){Magicians.forEach(name => console.log(name)) }

function make_a_great(Magicians:string[]){
   return Magicians.map(name => `The Great ${name}`)}

let copy_Magician_Names = Magician_Names.slice()
let copy_great_magicians = make_a_great(copy_Magician_Names)

console.log("\nOriginal Array")
show_magicians(Magician_Names)

console.log("\nModified Array")

show_magicians(copy_great_magicians)
