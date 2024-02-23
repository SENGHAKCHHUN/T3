// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
let mixNumber = arr[0];
for (let value in arr){
    if (arr[value] > mixNumber){
        mixNumber = arr[value]
    }
}
for (let value in arr){
    if (arr[value]<5){
        arr[value] = mixNumber
    }
}
console.log(arr)
// output: [9, 9, 6, 7, 9]