///======= SORT() =======//
// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort();
// console.log(fruits);
// or
// const numbers = [100, 20, 200, 30, 50, 70,1000, 0, 1];
// numbers.sort((a, b) => a - b);
// console.log(numbers)



///======= PUSH() ======///
// const numbers = [1, 2, 3];
// numbers.push(4,5, 6, 7)
// console.log(numbers)


//======= pop() =======///
// const numbers = [1, 2, 3];
// numbers.pop();
// console.log(numbers)



//======= shift() =======///
// const numbers = [1, 2, 3];
// const firstNumber =  numbers.shift();
// console.log(firstNumber)
// console.log(numbers)



//======= unshift() =======///
// const numbers = [1, 2, 3];
// const firstNumber =  numbers.unshift(-2, -1, 0);
// console.log(numbers)


//======= find() =======///
// const numbers = [1, 2, 3, 4, 5];
// const foundNumber =  numbers.find((num) => num == 2);
// console.log(foundNumber)



//======= includes() =======///
// const numbers = [1, 2, 3, 4, 5];
// const inclubesThree =  numbers.includes(1);
// console.log(inclubesThree)



//======= slice() =======///
// const numbers = [1, 0, 3, 4, 5];
// const sliceNumber =  numbers.slice(0 , 2);
// console.log(sliceNumber)



//======= map() =======///
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumber =  numbers.map((value) => value * 10);
// console.log(doubledNumber)



//======= filter() =======///
// const numbers = [1, 2, 3, 4, 5];
// const number =  numbers.filter((value) => value % 2 == 0);
// console.log(number)



//======= reduce() =======///
// const numbers = [1, 2, 3, 4, 5];
// const number =  numbers.reduce((total , value) => total += value);
// console.log(number)


//======= foreach() =======///
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((value) => console.log(value) * 2)



///======= indexof() =======//
// const fruits = ['banana', 'apple', 'orange', 'grape'];
// console.log(fruits.indexOf("banana"));



///======= lastindexof() =======//
// const fruits = ['banana', 'apple','hello', 'orange', 'grape'];
// fruits.reverse();
// console.log(fruits);



///======= concat() =======//
const fruits = ['banana', 'apple','hello'];
const moreFruits = [ 'orange', 'grape', 'pineapple'];
const allFruits = fruits.concat(moreFruits)
console.log(allFruits);