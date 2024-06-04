function build_Car(Manufacturer, Model) {
    var Details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Details[_i - 2] = arguments[_i];
    }
    var car = {
        Manufacturer: Manufacturer,
        Model: Model,
    };
    Details.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var new_car = build_Car("Honda", "Hondacity 1.2LS", "Color: Black", "Engine: Diesel");
console.log(new_car);
