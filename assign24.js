"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Testing equality with strings:");
let car = "car";
console.log(car == "car");
console.log(car == "Bike");
console.log("Testing with lower case:");
console.log("car" == "car"); // True
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
let fruits = ["lamborghini", "Ferrai", "Jaguar"];
console.log("Is 'Ferrari' in car?");
console.log(fruits.includes("Ferrari")); // True
console.log("Is 'Civic' not in cars?");
console.log(!fruits.includes("Civic")); // True
