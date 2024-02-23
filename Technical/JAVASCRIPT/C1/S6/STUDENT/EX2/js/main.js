let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
// TODO: 
// YOUR CODE HERE

// output: 14 becuase 3 + 5 + 1 + 2 + 3
let isRun = false
let sum = 0
for (let value in numbers){
    if (numbers[value] === 1 && ! isRun){
        isRun = true
    }else if(numbers[value] === 0 && isRun){
        isRun = false
    }else if (isRun){
        sum += numbers[value]
    }
}
console.log(sum)




