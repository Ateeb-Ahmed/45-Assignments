var current_users = ["Owais", "Khizer", "Ateeb", "Om", "Tauseen"];
var new_users = ["Umar", "Khizer", "Ali", "Kumail", "Tauseen"];
new_users.forEach(function (new_oneuser) {
    var the_condition = current_users.some(function (current_oneuser) { return current_oneuser.toLowerCase() === new_oneuser.toLowerCase(); });
    if (the_condition) {
        console.log("Sorry! ".concat(new_oneuser, ", is taken."));
    }
    else {
        console.log("".concat(new_oneuser, " is available"));
    }
});
