function build_Car(Manufacturer, Model, ...Details){
    let car = {
        Manufacturer : Manufacturer,
        Model : Model,
    };
    Details.forEach(option =>{
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();

    });
    return car
}

let new_car  = build_Car("Honda", "Hondacity 1.2LS", "Color: Black", "Engine: Diesel")
console.log(new_car)