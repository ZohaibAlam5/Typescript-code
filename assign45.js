"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cars(Manufacturer, Modelname, Color, Options) {
    let car = {
        Manufacturer,
        Modelname,
        Color,
        Options
    };
    return car;
}
console.log(cars("Rolls Royce", "Phantom", "White", "Cruise control"));
