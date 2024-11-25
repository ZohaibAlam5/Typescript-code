"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(...item) {
    let items = {
        item
    };
    return items;
}
console.log(sandwich("pattie", "ketchup"));
console.log(sandwich("pattie", "mayonaise", "ketchup"));
console.log(sandwich("pattie", "mayonaise", "ketchup", "Salad"));
