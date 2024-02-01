// // Function 1 (the avg
// function averageNum(num1, num2) {
//   return (num1 + num2) / 2;
// }
// console.log("test function1:", averageNum(4, 6));

// function sumString(s1 ,s2){
//   return s1 + s2;
// }
// console.log("test function2:", 'ronan', 'the best');







// function findAllEqual(arr){
//   for (let i = 0; i < arr.length; i = i +1){
//     if (arr[0] != arr[i]){
//       return false
//     }
//   }
//   return true
// }
// let array = [4,10,4,4];
// console.log(findAllEqual(array));








function string(obj){
  return 'studnet ' + obj.name + ' is ' + obj['age'] + ' years old'  
}

let student = {name : 'ronan', age : 17};
console.log(string(student));



// function findTrue(s1 , s2){
//   if (s1.length > s2.length){
//     return true
//   }
// }
// let st1 = 'aaa';
// let st2 = 'a';
// console.log("test function5:", findTrue(st1, st2));

// function function6(arr){
//   let sum = 0
//   for (let value in arr){
//     sum += arr[value]
//   }
//   return sum
// }
// let array = [10,20,30,40,50];
// console.log("test function6:", function6(array));

// function function7(x1,x2){
//   let arr = []
//   let arr2 = []
//   for (let i = 0; i < x1; i++){
//     for (let j = 0; j < x2; j++){
//       arr.push(0)
//     }
//     arr2.push(arr)
//     arr = []
//   }
//   return arr2
// }
// let x1 = 2;
// let x2 = 3;
// console.log("test function7:", function7(x1, x2));

// function function8(a1,a2){
//   let sum = 0
//   for (let i = 0; i < a1.length; i ++){
//     a1[i] = a1[i] + a2[i]
//   }
//   return a1
// }
// let array1 = [1,2,3];
// let array2 = [4,5,6]
// console.log("test function8:", function8(array1,array2));
