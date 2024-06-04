//Ateeb Ahmed-Assigment#15-Changing Guestlist
let guestlist = ["Ahsan", "Hunain", "Konain"];

let unavailable = guestlist[0];


guestlist.splice(0, 1, "Bilal");
guestlist.forEach((guest) =>
  console.log(
    `Hi ${guest}, "You're invited to join us for a delightful dinner gathering at our home this Saturday evening."`
  )
);