function make_a_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescripts"; }
    console.log("The Shirt size is ".concat(size, " and the message printed on it is \"").concat(message, "\""));
}
make_a_shirt();
make_a_shirt("medium");
make_a_shirt("Small", "I Love Pakistan");
