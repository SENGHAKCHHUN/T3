// let input = prompt("Enter your array by using comma");
// let arr = input.split(',');
// console.log(arr)
// let isRun = false;
// if (arr.length > 1){
//     for (let i = 0; i <arr.length; i++){
//         if (arr[i] > 10 && arr[i] < 100 && ! isRun){
//             isRun = false;
//         }else{
//             isRun = true
//             console.log("Invalid array")
//         }
//     };
//     if (! isRun){
//         console.log("Valid array")
//     }
// }else{
//     console.log("This array is empty")
// }


// let array = [12,34,56];
// let isRun = false;
// if (array.length > 1){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > 9 && array[i] < 100 && ! isRun){
//             isRun = false
//         }
//         else{
//             isRun = true;
//             console.log("Invalid Array")
//         }
//     }if (! isRun){
//         console.log("Valid array")
//     }
// }else{
//     console.log("This array is empty")
// }



function function3(arr){
    let isRun = true;
    let number = arr[0]
    for (let i =0; i<arr.lenght; i++){
        if (arr[i] === number && isRun){
            isRun = true
        }
        else{
            isRun = false
            return isRun
        }
    }
    return true
}
array = [10,5,10,10]
console.log(function3(array))






