//Ateeb Ahmed-Assigment#16-More Guest
let guestlist = ["Ahsan", "Hunain", "Konain"];

let unavailable = guestlist[0];


guestlist.splice(0, 1, "Bilal");
guestlist.unshift("Ahmed")
guestlist.push("Owais")

let middleindex: number = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Khizer")

guestlist.forEach((guest) => console.log(
    `Hi ${guest}, "Would you like to join us for dinner at Friday Night."`
  )
);

console.log(`Unfortunately, the big table won't be available, therefore, I can invite only two people`)

while(guestlist.length > 2){
    let removeguests = guestlist.pop();
    console.log(`Sorry, ${removeguests}, I can not invite you due to some reason`)
    }

    guestlist.forEach((guest) => console.log(
        `Hi ${guest}, "you are still invited to the dinner at Friday Night."`
      )
    );

    guestlist.pop();
    guestlist.pop();
    console.log("empty list", guestlist)
    