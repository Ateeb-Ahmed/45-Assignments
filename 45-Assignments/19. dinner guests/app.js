//Ateeb Ahmed-Assigment#19-Dinner Guest
var guestlist = ["Ahsan", "Hunain", "Konain"];
var unavailable = guestlist[0];
guestlist.splice(0, 1, "Bilal");
guestlist.unshift("Ahmed");
guestlist.push("Owais");
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Khizer");
console.log("Good News! A bigger table is available for us");
var guestquantity = guestlist.length;
console.log("We have invited total ".concat(guestquantity, " guests to the dinner"));
