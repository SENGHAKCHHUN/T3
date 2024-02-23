let text = "hello world [JavaScript] we [are] strong!";
// TODO: 
// YOUR CODE HERE
let run = true
let result = ''
for (let i =0; i < text.length; i++){
    if ( text[i] != '[' && run){
        result += text[i];
    }else if (text[i] == '['){
        run = false
    }else if (text[i]== ']'){
        run = true
    }
}
console.log(result)
// output: hello world we strong!


