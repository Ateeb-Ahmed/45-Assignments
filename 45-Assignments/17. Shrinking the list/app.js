//Ateeb Ahmed-Assigment#16-More Guest
var guestlist = ["Ahsan", "Hunain", "Konain"];
var unavailable = guestlist[0];
guestlist.splice(0, 1, "Bilal");
guestlist.unshift("Ahmed");
guestlist.push("Owais");
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Khizer");
guestlist.forEach(function (guest) { return console.log("Hi ".concat(guest, ", \"Would you like to join us for dinner at Friday Night.\"")); });
console.log("Unfortunately, the big table won't be available, therefore, I can invite only two people");
while (guestlist.length > 2) {
    var removeguests = guestlist.pop();
    console.log("Sorry, ".concat(removeguests, ", I can not invite you due to some reason"));
}
guestlist.forEach(function (guest) { return console.log("Hi ".concat(guest, ", \"you are still invited to the dinner at Friday Night.\"")); });
guestlist.pop();
guestlist.pop();
console.log("empty list", guestlist);
