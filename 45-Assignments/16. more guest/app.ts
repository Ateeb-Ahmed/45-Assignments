//Ateeb Ahmed-Assigment#16-More Guest
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
guestlist.forEach((guest) => console.log(
    `Hi ${guest}, "Would you like to join us for dinner at Friday Night."`
  )
);
