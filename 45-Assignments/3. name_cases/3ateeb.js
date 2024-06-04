var pname = "Ateeb ahmed";
console.log(pname.toLowerCase());
console.log(pname.toUpperCase());
console.log(pname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
