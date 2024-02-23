let text = "hello world [JavaScript] we [are] strong!";
// TODO: 
// YOUR CODE HERE
let txt = '';
let isRun = true;
for (let i = 0; i < text.length; i++){
    if (text[i] == '['){
        isRun = false;
    }else if(text[i]== ']'){
        isRun = true;
        i++
    }else if(isRun){
        txt +=text[i]
    }
}
console.log(txt)
// output: hello world we strong!


// let text = "hello[PNC]test";
let openBreaketIndex = -1;
let closeBreaketIndex = -1;
for (let i = 0; i < text.length; i++){
  if (text[i] === "["){
    openBreaketIndex = i;
  }else if(text[i] === "]"){
    closeBreaketIndex = i;
  }  
}
console.log(text.slice(0, openBreaketIndex) + 
text.slice(closeBreaketIndex + 1, text.length));