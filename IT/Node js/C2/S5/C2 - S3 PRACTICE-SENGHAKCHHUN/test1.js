// ---------- TEST  ----------------------------------------------------------

var {addFruit, getColorOf, getPriceOf, listFruits, save, load, fruits} = require('./fruitsLib');

addFruit("banana", "yellow", 12);
addFruit("apple", "red", 20);
addFruit("mango", "green", 20);
listFruits();

console.log("banana price is :" + getPriceOf("banana"));
console.log("mango color is :" + getColorOf("mango"));

// Save fruits
save();