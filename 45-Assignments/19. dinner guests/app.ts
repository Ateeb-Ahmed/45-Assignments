//Ateeb Ahmed-Assigment#19-Dinner Guest
let guestlist = ["Ahsan", "Hunain", "Konain"];

let unavailable = guestlist[0];


guestlist.splice(0, 1, "Bilal");
guestlist.unshift("Ahmed")
guestlist.push("Owais")

let middleindex: number = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Khizer")

console.log(
  `Good News! A bigger table is available for us`
)

let guestquantity: number = guestlist.length;
console.log(`We have invited total ${guestquantity} guests to the dinner`)