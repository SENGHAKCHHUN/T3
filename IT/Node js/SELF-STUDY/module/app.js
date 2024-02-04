// const moduleOne = require("./module1.js");
// const {message, PI} = require('./module1.js');
// message();
// console.log(PI);

const calc = require('./calculaters');
const moduleThree = require('./calculaters/module3');
console.log(moduleThree.total(12, 12, 11))
console.log(calc.minus(100, 1))