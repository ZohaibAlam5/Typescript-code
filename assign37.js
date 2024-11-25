"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_tshirt(size = "Large", message = "Freedom") {
    console.log(`The size of the shirt is ${size} and the message printed on it is ${message}`);
}
make_tshirt();
make_tshirt("medium");
make_tshirt("small", "House Home");
