var users = ["admin", "Rehan", "Owais", "Ateeb", "Khizer"];
users.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", Thankyou for logging in again"));
    }
});
