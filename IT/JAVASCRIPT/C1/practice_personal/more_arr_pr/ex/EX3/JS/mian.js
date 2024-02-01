const array =[1, 2.3, 4.3, 5, 76, 89, 1.2];
const newarr = [];
for (let value in array){
    if (Number.isInteger(array[value])){
        newarr.push(array[value])
    }
}
console.log(newarr)