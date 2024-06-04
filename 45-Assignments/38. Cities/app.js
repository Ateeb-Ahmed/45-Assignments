function describe_city(City, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(City, " is in ").concat(Country));
}
describe_city("Quetta");
describe_city("Islamabd");
describe_city("Tokyo", "Japan");
