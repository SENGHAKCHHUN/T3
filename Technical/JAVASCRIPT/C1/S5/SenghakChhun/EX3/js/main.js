let arr1 = [1,3,6,7,9];
let arr2 = [4,3,5,9,1];
let newarr = []
for (i = 0; i < arr1.length; i++){
    if (arr1[i] < arr2[i]){
        newarr.push(arr2[i])
    }else{
        newarr.push(arr1[i])
    }
}
console.log(newarr)