// let input = prompt("enter a string");
// input = input.toUpperCase();
let input = "hello world senghak chhun from cambodia";
let arr = [];
let word = '';
let isSpace = false;
for (let i = 0; i < input.length; i++){
    if (input[i] == ' '){     
        isSpace = true;
        arr.push(word);
        word = '';
    }else if(input[i] != ' ' && ! isSpace){
        word += input[i]
    }else if(isSpace){
        if (input[i] != 'w'){
            word += input[i].toUpperCase()
            isSpace = false
        }else{
            word += input[i]
            isSpace = false
        }
    }
}
arr.push(word)
console.log(arr)

