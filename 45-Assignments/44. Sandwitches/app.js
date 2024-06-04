function Sandwitch() {
    var Ingrediants = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ingrediants[_i] = arguments[_i];
    }
    console.log("\nFollowing are the ingrediants for Sandwitches:");
    Ingrediants.forEach(function (Ingrediant) { return console.log(Ingrediant); });
}
Sandwitch("Bread", "Eggs", "carrot", "Cucumber", "Mayonnise");
Sandwitch("Chicken", "Bread", "Ketchup", "Mayonnise");
Sandwitch("Beef", "Tomato", "Cabbage", "Mayo");
