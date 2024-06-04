let users = ["admin", "Rehan", "Owais", "Ateeb", "Khizer"];

users = []
if(users.length === 0) {console.log("We need to find some users")
}
else{
users.forEach(oneuser => {
    if(oneuser === "admin"){console.log(`Hello ${oneuser}, would you like to see a status report`)}
    else {console.log(`Hello ${oneuser}, Thankyou for logging in again`)}
})}