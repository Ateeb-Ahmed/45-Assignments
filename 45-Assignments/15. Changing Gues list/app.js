//Ateeb Ahmed-Assigment#15-Changing Guestlist
var guestlist = ["Ahsan", "Hunain", "Konain"];
var unavailable = guestlist[0];
guestlist.splice(0, 1, "Bilal");
guestlist.forEach(function (guest) {
    return console.log("Hi ".concat(guest, ", \"You're invited to join us for a delightful dinner gathering at our home this Saturday evening.\""));
});
