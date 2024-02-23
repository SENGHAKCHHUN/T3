let array = [1,2,7,5,8];
let arr = [8,8,3,9,2];

for (let i = 0; i < arr.length; i++){
    if (arr[i] < array[i]){
        arr[i] = array[i]
    }
}
console.log(arr)
