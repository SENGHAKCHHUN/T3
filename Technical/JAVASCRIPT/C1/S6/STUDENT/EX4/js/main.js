// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
let isRun = false
let maxNum = arr[1];
for (let value in arr){
    if (arr[value] < 5){
        if (! isRun){
            for (let i = 0; i < arr.length; i++){
                if (maxNum < arr[i]){
                    maxNum = arr[i]
                }
            };
            isRun = true
        }
        arr[value] = maxNum
    }
}
console.log(arr)
// output: [9, 9, 6, 7, 9]

