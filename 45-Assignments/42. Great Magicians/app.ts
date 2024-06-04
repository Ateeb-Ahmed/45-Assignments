let Magician_names= ["Pablo", "Eric", "Jessica"]

function show_magicians (Magicians: string[]){Magicians.forEach(name => console.log(name)) }

function make_a_great(Magicians:string[]){
   return Magicians.map(name => `The Great ${name}`)}

let Great_Magicians = make_a_great(Magician_names) 
show_magicians(Great_Magicians)