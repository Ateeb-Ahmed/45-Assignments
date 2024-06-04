//Ateeb Ahmed-Assigment#16-More Guest
var guestlist = ["Ahsan", "Hunain", "Konain"];
var unavailable = guestlist[0];
guestlist.splice(0, 1, "Bilal");
guestlist.unshift("Ahmed");
guestlist.push("Owais");
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Khizer");
console.log("Good News! A bigger table is available for us");
guestlist.forEach(function (guest) { return console.log("Hi ".concat(guest, ", \"Would you like to join us for dinner at Friday Night.\"")); });
