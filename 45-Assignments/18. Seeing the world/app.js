var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favoriteplaces = ["Capetown", "Argentina", "England", "Dubai", "Boston"];
console.log("Original Order:", favoriteplaces);
console.log("A copy in Alphabatical Order:", __spreadArray([], favoriteplaces, true).sort());
console.log("Still in original Order:", favoriteplaces);
console.log("A copy in Reverse Order:", __spreadArray([], favoriteplaces, true).reverse());
console.log("Still in original Order:", favoriteplaces);
console.log("Reversing the original Order:", favoriteplaces.reverse());
console.log("Back to the original Order:", favoriteplaces.reverse());
console.log("Sorting the original Order:", favoriteplaces.sort());
console.log("Reversing the original Order again:", favoriteplaces.reverse());
