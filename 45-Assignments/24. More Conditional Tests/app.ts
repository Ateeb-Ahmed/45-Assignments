let Pakistan = "pakistan"
let uppercasePakistan = "PAKISTAN"

let Savings = 10000
let Income = 25000

let Friends: string[] = ["Owais", "Khizer", "Tauseen"]

console.log(" Is Pakistan is equal to Pakistan")
console.log(Pakistan == "pakistan")

console.log("\n is pakistan is equal to lowercase of PAKISTAN")
console.log(uppercasePakistan.toLocaleLowerCase() == "pakistan")

console.log("\n is pakistan is not equal to lowercase of PAKISTAN")
console.log(uppercasePakistan.toLocaleLowerCase() != "pakistan")


console.log("\n Income = 25000 ")
console.log(Income == 25000)

console.log("\n Savings = 10000")
console.log(Savings != 10000)

console.log("\n Income is greater than Savings")
console.log(Income > Savings)

console.log("\n Savings is less than 10000")
console.log(Savings < 10000)

console.log("\n Income is greater than or equal to Savings")
console.log(Income >= Savings)

console.log("\n Savings is less than or equal to 10000")
console.log(Savings <= 10000)

console.log("\nIncome is equal to 25000 and is more than savings")
console.log(Income == 25000 && Income>Savings)

console.log("\nIncome is equal to 25000 and is less than savings")
console.log(Income == 25000 && Income<Savings)

console.log("\nIncome is equal to 25000 or is less than savings")
console.log(Income == 25000 || Income<Savings)

console.log("\n is Khizer my friend")
console.log(Friends.includes("Khizer"))

console.log("\n isn't Khizer my friend")
console.log(!Friends.includes("Khizer"))
