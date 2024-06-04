let current_users = ["Owais", "Khizer", "Ateeb", "Om", "Tauseen"]

let new_users = ["Umar", "Khizer", "Ali", "Kumail", "Tauseen"]

new_users.forEach(new_oneuser => { 
    let the_condition = current_users.some(current_oneuser => current_oneuser.toLowerCase() === new_oneuser.toLowerCase()) 
    if (the_condition) { console.log(`Sorry! ${new_oneuser} is taken.`)
        
    } else { console.log(`${new_oneuser} is available`)
        
    }
});

