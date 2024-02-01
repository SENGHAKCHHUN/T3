let result = document.getElementById('totalPrice');
let p = document.querySelectorAll('p')
let quantity1 = document.getElementById('quantity1');
let quantity2 = document.getElementById('quantity2');

let calucate1 = 0;
let calucate2 = 0;
function calucteOne(){
    let word = p[0].textContent
    let run = false;
    let w = '';
    for (let i =0; i< word.length; i++){
        if (word[i] == '$' && !run){
            run = true;
        }else if(run){
            w+=word[i]
        }
    }
    calucate1 = quantity1.value * Number(w)
    result.textContent = calucate1 + calucate2 +'.00'
}
function calucteTwo(){
    let word = p[1].textContent
    let run = false;
    let w = '';
    for (let i =0; i< word.length; i++){
        if (word[i] == '$' && !run){
            run = true;
        }else if(run){
            w+=word[i]
        }
    }
    calucate2 = quantity2.value * Number(w)
    result.textContent = calucate2 + calucate1 +'.00'
}
quantity1.addEventListener('input', calucteOne)
quantity2.addEventListener('input', calucteTwo)